const router = require('express').Router()
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')
const profile = require('../controllers/profile')
const requests = require('../controllers/requests')



router.route('/requests')
  .get(requests.index)
  .post(secureRoute, requests.create) //add secure route here

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)
  .get(secureRoute, users.profile)
  .put(secureRoute, users.notNew)

router.route('/profile')
  .get(secureRoute, users.profile)
  .put(secureRoute, users.notNew)

router.route('/profile/new')
  .post(secureRoute, profile.create)

router.route('/profile/show/:id')
  .get(profile.show)

router.route('/users/:id')
  .get(users.profile)





 

// we wont need an id placeholder here because we can getAuth to retrieve the loggedin user token, and check against users on our database

//   .post(user.new) // make a new user profile
//   .put(user.edit) // edit existing user profile

// router.route('/requests')
//   .get(requests.index) // see all requests
//   .post(requests.create) // create a request

// router.route('/requests/:id)
//   .get(request.show) // show the request of id
//   .put(request.update) // edit the request of id
//   .delete(request.remove)  // delete the request of id 

module.exports = router