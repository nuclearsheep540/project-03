const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = ('../config/environment')


// REGISTER ROUTE - /register
function register(req, res) {
  User
    .create(req.body) 
    .then(user => res.status(201).json({ message: `Thanks for Registering ${user.username}` }))
    .catch(err => res.status(422).json(err))
}

// LOGIN ROUTE - /login
function login(req, res) {
  User 
    .findOne({ username: req.body.username })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' })
      }
      // const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '2h' })
      res.status(202).json({ message: `Welcome back ${user.username}`,  })
      
    })
    .catch(() => res.status(401).json({ message: 'Unauthorized' }
    ))
}

module.exports = {
  register,
  login
}