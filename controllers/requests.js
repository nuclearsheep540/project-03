const Request = require('../models/Request')

// INDEX ROUTE - /requests

function index(req, res) {
  Request
    .find()
    .then(elem => res.status(200).json(elem))
    .catch(() => res.status(404).json({ message: 'Not found' }))

}

function create(req, res, next) {
  req.body.user = req.currentUser
  Request.create(req.body)
    .then(index => res.status(201).json(index))
    .catch(next)
}




module.exports = {
  index,
  create
}