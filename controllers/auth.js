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

// GET PROFILE ROUTE / PROFILE 
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

// function editProfile(req, res, next) {
//   User
//     .findById(req.currentUser._id)
//     .then(user => {
//       console.log(req.currentUser)
//       console.log(req.body)
//       return user.set(req.body)
//     })
//     .then(user => user.save())
//     .then(user => res.status(202).json(user))
//     .catch(next)
// }

function editProfile (req, res) {
  User.findById(req.params.id)
    .populate('user')
    .populate('userProfile')
    .then(user => {
      if (!user) return res.status(404).json({ message: 'Not found 1' })
      user = user.userProfile
      return user.set(req.body)
    })
    .then(user =>{
      user.save()
      res.status(202).json(user)
    })
    .catch(err => console.log(err))
}
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

function showExt(req, res) {
  User.findById(req.params.id)
    .populate('userProfile')
    .then(user => res.status(200).json(user))
    .catch(err => res.json(err))
}

function all(req, res) {
  User.find()
    .populate('userprofile')
    .then(user => res.status(200).json(user))
}



module.exports = {
  register,
  login,
  profile,
  createProfile,
  editProfile,
  notNew,
  showExt,
  all
}