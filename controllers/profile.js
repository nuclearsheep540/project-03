// const Profile = require('../models/Profile')
// const User = require('../models/User')


// // CREATE PROFILE ROUTE - /profile/new

// function create(req, res, next) {
//   req.body.user = req.currentUser.id
//   Profile.create(req.body)
//     .then(profile => res.status(201).json(profile))
//     .catch(next)
// }

// // SHOW PROFILE ROUTE -/profile/show

// function show (req, res) {
//   req.body.user = req.currentUser
//   console.log('function show',req.body.user)
//   Profile.findById(req.params.id)
//     .populate('userProfile')
//     .then(elem => {

//       res.status(200).json(elem)
//     })
//     .catch(err => console.log(err))
// }

// // EDIT PROFILE ROUTE -/profile/:id

// // function edit (req, res) {
// //   User
// //     .findById(req.params.id)
// //     .populate('user')
// //     .then(profile => {
// //       if (!profile) return res.status(404).json({ message: 'Not found 1' })
// //       if (!profile.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' })
// //       return profile.set(req.body)
// //     })
// //     .then(profile => profile.save())
// //     .then(profile => res.status(202).json(profile))
// //     .catch(err => console.log(err))
    

// // }

// module.exports = {
//   create,
//   show
// }