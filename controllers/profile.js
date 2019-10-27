const Profile = require('../models/Profile')
const User = require('../models/User')






//index route of /user
// function index(req, res) {
//   User.find()
//     .populate('user')
//     .populate('comments.user')
//     .then(user => res.status(200).json(user))
//     .catch(err => console.log(err))
// }



// CREATE PROFILE ROUTE - /profile/new
function create(req, res, next) {
  req.body.user = req.currentUser
  Profile.create(req.body)
    .then(profile => res.status(201).json(profile))
    .catch(next)
}

function show (req, res) {
  // req.body.user = req.currentUser
  //find the user
  //find the profile that belongs to the user
  console.log('show function params=',req.body.currentUser) //this is the user


  Profile.findById(req.params.id)
    .then(elem => {
      console.log('element =',elem)
      res.status(200).json(elem)
    })
    .catch(err => console.log(err))
}

//show route of /user/:id
// function show(req, res) {
//   User.findById(req.params.id)
//     .populate('user')
//     .populate('comments.user')
//     .then(user => {
//       if (!user) return res.status(404).json({ message: 'No users here' })
//       res.status(200).json(user)
//     })
//     .catch(() => res.json({ message: '404 - User not found' }))
// }

// update route
// function update(req, res, next) {
//   req.body.user = req.currentUser
//   User.findByIdAndUpdate(req.params.id, req.body,)
//     .then(user => {
//       if (!user) return res.status(404).json({ message: 'There are no users' })
//       if (!user.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Not authorized' })
//       res.status(202).json(user)
//     })
//     .catch(next)
// }

// function remove(req, res, next) {
//   req.body.user = req.currentUser
//   User.findByIdAndDelete(req.params.id)
//     .then(user => {
//       if (!user) return res.status(404).json({ message: 'There are no users here' })
//       if (!user.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Not authorized' })
//       res.status(204).json(user)
//     })
//     .catch(next)
// }



module.exports = {
  create,
  show
}