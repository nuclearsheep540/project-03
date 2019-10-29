const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const RequestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  frameworks: { type: [String] },
  languages: { type: [String] },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [ commentSchema ]
}, {
  timestamps: true
})

RequestSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Request', RequestSchema)