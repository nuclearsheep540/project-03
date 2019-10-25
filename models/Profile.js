const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  image: { type: String, required: true },
  age: { type: Number },
  location: { type: String },
  fieldIndustry: { type: String },
  skills: { type: [String] },
  languages: { type: [String] },
  frameworks: { type: [String] },
  qualifications: { type: [String] },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

profileSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Profile', profileSchema)