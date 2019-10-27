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
      res.status(202).json({ name: `${user.username}`, message: 'Welcome back', newUser: `${user.newUser}`, token })
      console.log(user)
    })
    .catch(() => {
      res.status(401).json({ message: 'catch error' })
      console.log('username = ',req.body.username ,'pass= =', req.body.password)
    })
}

// PROFILE ROUTE / PROFILE 
function profile(req, res) {
  User.findById(req.currentUser._id)
    .then(user => res.status(200).json(user))
    .catch(err => res.json(err))
}


// USER UPDATE (FOR STATE.NEWUSER = FALSE)
function notNew(req, res, next) {
  req.body.user = req.currentUser
  User.findByIdAndUpdate(req.currentUser._id, req.body )
    .then(elem => {
      console.log( req.currentUser._id )
      if (!elem) return res.status(404).json({ message: 'There are no users here' })
      if (!elem._id.equals(req.currentUser._id)) return res.status(401).json({ message: 'You\'re not the Authorized user for this task!' })
      res.status(202).json(elem)
    })
    .catch(next)
}


module.exports = {
  register,
  login,
  profile,
  notNew
}