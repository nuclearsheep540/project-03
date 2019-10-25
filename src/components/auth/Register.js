import React from 'react'
import axios from 'axios'


export default class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        firstname: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        newUser: true
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/register', this.state.data)
      .then(res => {
        console.log(res)
        this.profileNew()
        
      })
      .catch(err => console.log(err))
  }
  profileNew(){
    axios.post('/api/profile/new', this.state.data.firstname, this.state.data.lastName)
      .then(this.props.history.push('/login'))
  }

  render() {
    console.log(this.state.data, 're-render')
    return (
      <form onSubmit={this.handleSubmit}>
        <div onSubmit={this.handleSubmit} className="row">
          <div className="six columns">
            <label name="exampleEmailInput" type='email'>Your email</label>
            <input
              className="u-full-width"
              placeholder="example@mailbox.com"
              type='email'
              name='email'
              onChange={this.handleChange}>
            </input>
          </div>
          <div className="six columns">
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
        <div className="six columns">
          <label name="exampleRecipientInput">Last name</label>
          <input
            placeholder="Enter your last name"
            type='text'
            className="u-full-width"
            name="lastName"
            onChange={this.handleChange}>
          </input>

        </div>

        <div className="six columns">
          <label name="exampleRecipientInput">Username</label>
          <input
            className="u-full-width"
            placeholder="Enter your username"
            type='text'
            name="username"
            onChange={this.handleChange}>
          </input>
        </div>


        <div className="six columns">
          <label name="exampleRecipientInput">Password</label>
          <input
            className="u-full-width"
            placeholder="Enter your password"
            type='password'
            name="password"
            onChange={this.handleChange}>
          </input>
        </div>


        <div className="six columns">
          <label name="exampleRecipientInput">Password confirmation</label>
          <input
            className="u-full-width"
            placeholder="Confirm your password"
            type='password'
            name="passwordConfirmation"
            onChange={this.handleChange}>
          </input>
        </div>

        <button type='submit'>Submit</button>
      </form> // end of form, keep everything above
    )
  }
}
