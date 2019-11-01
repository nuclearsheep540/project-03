/* global describe, beforeEach, afterEach, it, expect, api */
const Request = require('../../models/Request')
const User = require('../../models/User')

describe('GET /requests', () => {
  beforeEach(done => {
    User.create({
      username: 'test',
      email: 'test@test',
      firstName: 'test',
      lastName: 'test',
      password: 'test',
      passwordConfirmation: 'test'
    })
      .then(request => {
        return Request.create([
          {
            title: 'This is just a test',
            frameworks: ['React'],
            languages: ['CSS'],
            description: 'I am testing',
            user: request
          },
          {
            title: 'This is another test, more test than the other',
            frameworks: ['Go'],
            languages: ['Play'],
            description: 'I am doing the testings',
            user: request
          }
        ])
      })
      .then(() => done())
  })

  afterEach(done => {
    User.deleteMany()
      .then(() => Request.deleteMany())
      .then(() => done())
  })

  it('should return a 200 response', done => {
    api.get('/api/requests')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an array', done => {
    api.get('/api/requests')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        done()
      })
  })
  
  it('should contain objects', done => {
    api.get('/api/requests')
      .end((err, res) => {
        res.body.forEach(request => {
          expect(request).to.be.an('object')
        })
        done()
      })
  })

  it('should return correct keys', done => {
    api.get('/api/requests')
      .end((err, res )=> {
        res.body.forEach(request => {
          expect(request).to.contains.key([
            '_id',
            'title',
            'frameworks',
            'languages',
            'description',
            'user'
          ])
        })
        done()
      })
  })
  it('should return correct data types', done => {
    api.get('/api/requests')
      .end((err, res ) => {
        res.body.forEach(request => {
          expect(request._id).to.be.a('string')
          expect(request.title).to.be.a('string')
          expect(request.frameworks).to.be.a('array')
          expect(request.languages).to.be.a('array')
          expect(request.description).to.be.a('string')
          expect(request.user).to.be.a('object')
        })
        done()
      })
    
  })
})