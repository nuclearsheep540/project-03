const Request = require('../models/Request')

// INDEX ROUTE - /requests

function index(req, res) {
  Request
    .find()
    .populate('user')
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

// SHOW ROUTE - /requests/:id

function show(req, res) {
  Request
    .findById(req.params.id)
    .populate('user')
    .populate('comments.user')
    .then(request => {
      if (!request) return res.status(404).json({ message: 'Not found' })
      res.status(200).json(request)
    })
    .catch(() => res.status(404).json({ message: 'Not found' }))

}

// EDIT ROUTE - /requests/:id

function edit(req, res) {
  Request
    .findById(req.params.id)
    .then(request => {
      if (!request) return res.status(404).json({ message: 'Not found' })
      if (!request.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' })
      return request.set(req.body)
    })
    .then(request => request.save())
    .then(request => res.status(202).json(request))
    .catch(err => console.log(err))
}



// DELETE ROUTE - /requests/:id

function removeRoute(req,res) {
  Request 
    .findById(req.params.id)
    .then(request => {
      if (!request.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' })
      return request.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(err => res.staus(400).json(err))
}

function commentCreate(req, res) {
  req.body.user = req.currentUser
  Request
    .findById(req.params.id)
    .populate('userProfile')
    .populate('user')
    .populate('Profile')
    .populate('comments.user')
    .populate('comments.user.userProfile')
    .then(request => {
      if (!request) return res.status(404).json({ message: 'Not Found' })
      request.comments.push(req.body)
      return request.save()
    })
    .then(request => res.status(200).json(request))
    .catch(err => res.json(err))

}

function commentDelete(req, res) {
  req.body.user = req.currentUser 
  Request.findById(req.params.id)
    .then(request => {
      if (!request) return res.status(404).json({ message: 'Not found' })
      const comment = request.comments.id(req.params.commentId)
      if (!comment.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'You didnt make this comment' })
      comment.remove()
      return request.save()
    })
    .then(request => res.status(202).json(request))
    .catch(err => console.log(err))
}



module.exports = {
  index,
  create,
  show,
  edit,
  removeRoute,
  commentCreate,
  commentDelete
}