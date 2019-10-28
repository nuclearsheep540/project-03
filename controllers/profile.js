const Profile = require('../models/Profile')
const User = require('../models/User')


// CREATE PROFILE ROUTE - /profile/new
function create(req, res, next) {
  req.body.user = req.currentUser.id
  Profile.create(req.body)
    .then(profile => res.status(201).json(profile))
    .catch(next)
}

function show (req, res) {
  req.body.user = req.currentUser
  console.log('function show',req.body.user)
  Profile.findById(req.params.id)
    .populate('userProfile')
    .then(elem => {

      res.status(200).json(elem)
    })
    .catch(err => console.log(err))
}
module.exports = {
  create,
  show
}