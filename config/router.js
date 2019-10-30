const router = require('express').Router()
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')
const profile = require('../controllers/profile')
const requests = require('../controllers/requests')



router.route('/requests')
  .get(requests.index)
  .post(secureRoute, requests.create) //add secure route here

router.route('/requests/:id')
  .get(requests.show)
  .put(secureRoute, requests.edit)
  .delete(secureRoute, requests.removeRoute)

router.route('/requests/:id/comments')
  .post(secureRoute, requests.commentCreate)

router.route('/requests/:id/comments/:commentId')
  .delete(secureRoute, requests.commentDelete)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)
  .get(secureRoute, users.profile)

router.route('/profile')
  .get(secureRoute, users.profile)
  .post(secureRoute, users.createProfile)

router.route('/profile/:id/edit')
  .put(secureRoute, users.editProfile)


//good shit up above





// router.route('/profile/show/')
//   .get(secureRoute, profile.show)








// router.route('/profile/:id/edit')
//   .put(secureRoute, profile.edit)

// router.route('/users/:id')
//   .get(users.profile)

// router.route('/profile/new')
//   .put(secureRoute, users.update)






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