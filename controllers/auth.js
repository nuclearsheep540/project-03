const User = require('../models/User')
const Profile = require('../models/Profile')
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
    .populate('userProfile')
    .then(user => res.status(200).json(user))
    .catch(err => res.json(err))
}

// USER UPDATE (FOR STATE.NEWUSER = FALSE)
function createProfile(req, res, next) {
  let currentUser = null
  User.findById(req.currentUser._id)
    .then(user => {
      currentUser = user
      return Profile.create(req.body)
    })
    .then(profile => {
      currentUser.userProfile = profile
      return currentUser.save()
    })
    .then(user => res.status(201).json(user))
    .catch(next)
}

function update(req, res, next) {
  User.findById(req.currentUser._id)
    .then(user => {
      console.log(req.currentUser)
      console.log(req.body)
      return user.set(req.body)
    })
    .then(user => user.save())
    .then(user => res.status(202).json(user))
    .catch(next)
}

module.exports = {
  register,
  login,
  profile,
  createProfile,
  update
}