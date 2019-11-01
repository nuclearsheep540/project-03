import React from 'react'
import Axios from 'axios'
import Auth from '../../lib/auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        password: ''
      },
      user: '',
      error: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  errorHandler() {
    if (this.state.data.username.length < 3)  {
      console.log('no user')
      this.setState({ error: true }) 
      setTimeout(() => {
        return this.setState({ error: false })
      }, 3000)
    } 
  }

  // SORT LOGIN ERROR HANDLER. SEE CHEESEBORED

  handleSubmit(e) {
    e.preventDefault()
    this.errorHandler()
    Axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        Auth.setName(res.data.name)
        this.setState({ username: res.data.name })
        console.log('new user? ',res.data)
        if (res.data.newUser === 'true'){
          console.log('its a newbie')
          this.props.history.push('/profile/new')
        } else {
          console.log('its an old timer')
          this.props.history.push('/profile/show')
        } 

        console.log('response data from /login  = ', res.data)
      })
      .catch(error => this.setState({ error }))
    console.log('login submitted')
  }


  render() {
    return (
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Login</h2> 
            <h4 className= {`${this.state.error ? 'invalid-entry' : 'hide'}`}>Invalid Entry, please try again</h4>
            <div className="wrapper-two">
              <div className='container-half'>

                <div className="input-area">
                  <label className="">Username</label>
                  <div className="">
                    <input
                      className="u-full-width"
                      name="username"
                      type='text'
                      placeholder="Username"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>


                <div className="input-area">
                  <label className="label">Password</label>
                  <div className="input">
                    <input
                      className="u-full-width"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}>
                    </input>
                  </div>
                </div>
              </div>
              <br />
            
            </div>
            <button type="submit" className="button is-light">Login</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Login