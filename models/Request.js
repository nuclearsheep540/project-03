const mongoose = require('mongoose')

const RequestSchema = new mongoose.Schema({
  title: { type: [String], required: true },
  framework: { type: String },
  language: { type: String },
  description: { type: [String], required: true }
}, {
  timestamps: true
})

RequestSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Request', RequestSchema)