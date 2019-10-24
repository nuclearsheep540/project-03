const router = require('express').Router()
const users = require('../controllers/auth')

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

// we wont need an id placeholder here because we can getAuth to retrieve the loggedin user token, and check against users on our database
// router.route('/profile') 
//   .post(user.new) // make a new user profile
//   .put(user.edit) // edit existing user profile
//   .get(user.show) // show the user

// router.route('/requests')
//   .get(requests.index) // see all requests
//   .post(requests.create) // create a request

// router.route('/requests/:id)
//   .get(request.show) // show the request of id
//   .put(request.update) // edit the request of id
//   .delete(request.remove)  // delete the request of id 

module.exports = router