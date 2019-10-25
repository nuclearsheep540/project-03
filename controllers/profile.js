const User = require('../models/User')

//index route of /user
function index(req, res) {
  User.find()
    .populate('user')
    .populate('comments.user')
    .then(user => res.status(200).json(user))
    .catch(err => console.log(err))
}

//create route of /user
function create(req, res, next) {
  req.body.user = req.currentUser
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next)
}

//show route of /user/:id
function show(req, res) {
  User.findById(req.params.id)
    .populate('user')
    .populate('comments.user')
    .then(user => {
      if (!user) return res.status(404).json({ message: 'No users here' })
      res.status(200).json(user)
    })
    .catch(() => res.json({ message: '404 - User not found' }))
}

// update route
function update(req, res, next) {
  req.body.user = req.currentUser
  User.findByIdAndUpdate(req.params.id, req.body,)
    .then(user => {
      if (!user) return res.status(404).json({ message: 'There are no users' })
      if (!user.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Not authorized' })
      res.status(202).json(user)
    })
    .catch(next)
}

function remove(req, res, next) {
  req.body.user = req.currentUser
  User.findByIdAndDelete(req.params.id)
    .then(user => {
      if (!user) return res.status(404).json({ message: 'There are no users here' })
      if (!user.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Not authorized' })
      res.status(204).json(user)
    })
    .catch(next)
}



module.exports = {
  index,
  create,
  show,
  update,
  remove
}