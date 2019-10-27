const Request = require('../models/Request')

// INDEX ROUTE - /requests

function index(req, res) {
  Request
    .find()
    .populate('User')
    .then(elem => res.status(200).json(elem))
    .catch(() => res.status(404).json({ message: 'Not found' }))

}

// CREATE ROUTE - /requests

function create(req, res, next) {
  req.body.user = req.currentUser
  Request.create(req.body)
    .then(index => res.status(201).json(index))
    .catch(next)
}

// SHOW ROUTE - /requests/id

function show(req, res) {
  Request
    .findById(req.params.id)
    .populate('User')
    .then(request => {
      if (!request) return res.status(404).json({ message: 'Not found' })
      res.status(200).json(request)
    })
    .catch(() => res.status(404).json({ message: 'Not found' }))

}

// EDIT ROUTE - /requests/id

function edit(req, res) {
  Request
    .findById(req.params.id)
    .then(request => {
      if (!request) return res.status(404).json({ message: 'Not found' })
      // if (!request.user.equals(req.currentUSer._id)) return res.status(401).json({ message: 'Unauthorized' })
      return request.set(req.body)
    })
    .then(request => request.save())
    .then(request => res.status(202).json(request))
    .catch(err => res.status(422).json(err))
}

// DELETE ROUTE - /requests/id

function removeRoute(req,res) {
  Request 
    .findById(req.params.id)
    .then(request => {
      // if (!request.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' })
      return request.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(err => res.staus(400).json(err))
}






module.exports = {
  index,
  create,
  show,
  edit,
  removeRoute
}