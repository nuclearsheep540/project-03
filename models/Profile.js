const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  image: { type: String },
  age: { type: Number },
  location: { type: String },
  fieldIndustry: { type: String },
  skills: { type: [String] },
  languages: { type: [String] },
  frameworks: { type: [String] },
  qualifications: { type: [String] }
}, {
  timestamps: true
})

profileSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Profile', profileSchema)