const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function secureRoute(req, res, next) {
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Access denied' })
  }

  const token = req.headers.authorization.replace('Bearer ', '')

  jwt.verify(token, secret, (err, payload) => {
    if (err) return res.status(401).json({ message: 'Access denied' })
    User.findById(payload.sub)
      .then(user => {
        if (!user) return res.status(401).json({ message: 'Access denied' })
        req.currentUser = user
        next()
      })
      .catch(() => res.status(401).json({ message: 'Access denied' }))
  })
}
module.exports = secureRoute