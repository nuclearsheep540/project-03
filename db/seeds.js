const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/User')
// const Request = require('../models/Request')
// const Profile = require('../models/Profile')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        return User.create([
          {
            firstName: 'Sarah',
            lastName: 'Parker',
            username: 'sarah125',
            email: 'sarah@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Mary',
            lastName: 'Miller',
            username: 'mm2018',
            email: 'mary@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Joseph',
            lastName: 'Tennant',
            username: 'jo_tennant',
            email: 'jo@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Harry',
            lastName: 'Smith',
            username: 'harrys101',
            email: 'harry@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Will',
            lastName: 'McCallum',
            username: 'will_is_great',
            email: 'will@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Gregory',
            lastName: 'Dodd',
            username: 'greggs_pastry',
            email: 'greg@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Octavia',
            lastName: 'Daly',
            username: 'taves99',
            email: 'octavia@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Henry',
            lastName: 'Gateway',
            username: 'henners95',
            email: 'henry@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Olly',
            lastName: 'Trant',
            username: 'ol_dawg',
            email: 'olly@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Marcus',
            lastName: 'Simpson',
            username: 'msimpson54',
            email: 'marcus@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'John',
            lastName: 'Ramsden',
            username: 'jonorambo',
            email: 'john@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Sally',
            lastName: 'Johnston',
            username: 'sal101',
            email: 'sally@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Bob',
            lastName: 'Jones',
            username: 'bobby_be_back',
            email: 'bob@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Tony',
            lastName: 'Morris',
            username: 'toni-italiano',
            email: 'toni@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            firstName: 'Rosie',
            lastName: 'Jenkins',
            username: 'rosie_cheeks',
            email: 'rosie@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          }

        ])
      })
      .then(users => console.log(`${'users'.repeat(users.length)} created`))
      .finally(() => mongoose.connection.close())
  }
)