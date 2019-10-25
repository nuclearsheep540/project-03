const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')


// REGISTER ROUTE - /register
function register(req, res) {
  User.create(req.body) 
    .then(user => res.status(201).json({ message: `Thanks for Registering ${user.username}` }))
    .catch(err => res.status(422).json(err))
}

// LOGIN ROUTE - /login
function login(req, res) {
  User.findOne({ username: req.body.username })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Bad input' })
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      res.status(202).json({ name: `${user.username}`, message: 'Welcome back', token })
    })
    .catch(() => {
      res.status(401).json({ message: 'catch error' })
      console.log('username = ',req.body.username ,'pass= =', req.body.password)
    })
}

// function logged(req, res) {
//   User.findOne({  })
// }

// PROFILE ROUTE / PROFILE 
function profile(req, res) {
  User.findById(req.currentUser._id)
    .then(user => res.status(200).json(user))
    .catch(err => res.json(err))
}

module.exports = {
  register,
  login,
  profile
}