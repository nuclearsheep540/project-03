import React from 'react'
import axios from 'axios'
// import Auth from '../../lib/auth'


export default class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        newUser: true
        
      },
      errorUser: false,
      errorPassword: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // checkUsername() {
  //   if (this.state.data.username.length < 3) {
  //     console.log('no user')
  //     this.setState({ error: true, username: 'Username is not long enough' }) 
  //   }
  // }
  

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
    // this.checkUsername()
  }

  handleErrors() {
    if (this.state.data.username.length < 3) {
      console.log('no user')
      this.setState({ errorUser: true }) 
      setTimeout(() => {
        return this.setState({ errorUser: false })
      }, 3000)
    } else if (this.state.data.password < 6 || this.state.data.password !== this.state.data.passwordConfirmation) {
      this.setState({ errorPassword: true })
      setTimeout(() => {
        return this.setState({ errorPassword: false })
      }, 3000)
    } else {
      axios.post('/api/register', this.state.data)
        .then(res => {
          console.log(res),
          this.props.history.push('/login')
        })
        .catch(err => console.log(err))
    
    }
  }

 



  handleSubmit(e) {
    this.handleErrors()
    e.preventDefault()
  }
  // profileNew() {
  //   axios.post('/api/profile/new', this.state.data.firstname, this.state.data.lastName,
  //     {
  //       headers: { Authorization: `Bearer ${Auth.getToken()}` }
  //     })
 
  // }

  // "u-full-width"


  render() {
    console.log(this.state, 'error?')
    console.log(this.state.data, 're-render')
    return (
      <section className="section">
        <div className="container">


          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Register</h2>
            <h4 className= {`${this.state.errorUser || this.state.errorPassword ? 'invalid-entry' : 'hide'}`}>Invalid Entry, please try again</h4>
            <div onSubmit={this.handleSubmit} className="wrapper-two">
              <div className='container-half'>

                <div className="input-area">
                  <label name="exampleEmailInput" type='email'>Your email</label>
                  <input
                    className="u-full-width"
                    placeholder="example@mailbox.com"
                    type='email'
                    name='email'
                    onChange={this.handleChange}>
                  </input>
                </div>
              </div>

              <div className='container-half'>
                <div className="input-area">
                  { !this.state.errorUser ?
                    <label name="exampleRecipientInput">Username</label> :
                    <label className="invalid-entry">Username must be more than 3 characters long</label>
                  }
                  <input
                    className={`u-full-width  ${this.state.errorUser ? 'field1' : ''}`}
                    placeholder="Enter your username"
                    type='text'
                    name="username"
                    onChange={this.handleChange}>
                  </input>
                </div>
              </div>

              <div className='container-half'>
                <div className="input-area">
                  <label name="exampleRecipientInput">First name</label>
                  <input
                    className="u-full-width"
                    placeholder="Enter your first name"
                    type='text'
                    name='firstName'
                    onChange={this.handleChange}>
                  </input>
                </div>
              </div>


              <div className='container-half'>
                <div className="input-area">
                  <label name="exampleRecipientInput">Last name</label>
                  <input
                    placeholder="Enter your last name"
                    type='text'
                    className="u-full-width"
                    name="lastName"
                    onChange={this.handleChange}>
                  </input>
                </div>
              </div>


              <div className='container-half'>
                <div className="input-area">
                  { !this.state.errorPassword ?
                    <label name="exampleRecipientInput">Password</label> :
                    <label className="invalid-entry">Passwords do not match</label>
                  }
                  <input
                    className={`u-full-width  ${this.state.errorPassword ? 'field1' : ''}`}
                    placeholder="Enter your password"
                    type='password'
                    name="password"
                    onChange={this.handleChange}>
                  </input>
                </div>
              </div>


              <div className='container-half'>
                <div className="input-area">
                  <label name="exampleRecipientInput">Password confirmation</label>
                  <input
                    className={`u-full-width  ${this.state.errorPassword ? 'field1' : ''}`}
                    placeholder="Confirm your password"
                    type='password'
                    name="passwordConfirmation"
                    onChange={this.handleChange}>
                  </input>
                </div>
              </div>


              <button type='submit'>Submit</button>

            </div>
          </form>
        </div>
      </section>
    )
  }
}


