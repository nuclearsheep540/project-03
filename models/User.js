const mongoose = require('mongoose')
const bycrpt = require('bcrypt')

const userSchema = new mongoose.Schema({ 
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

userSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.password
    delete json.email
    return json
  }
})


userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password')) {
      this.invalidate('passwordConfirmation', 'error, please check that your passwords match')
    }
    next()
  })

userSchema
  .pre('save', function hashPassword(next) {
    if (this.isModified('password')) {
      this.password = bycrpt.hashSync(this.password, bycrpt.genSaltSync(8))
    }
    next()
  })  

userSchema.methods.validatePassword = function validatePassword(password) {
  return bycrpt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema)