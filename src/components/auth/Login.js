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
      user: ''
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
    console.log(e)
    Axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        Auth.setName(res.data.name)
        this.setState({ name: res.data.name })
        res.data.newUser ? this.props.history.push('/profile/new') : this.props.history.push('/profile/show')
        console.log('response data from user log in = ', res)
      })
      .catch(err => console.log(err))
    console.log('login submitted')
  }


  render() {
    return (
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Login</h2>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  name="username"
                  placeholder="username"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button type="submit" className="button is-light">Login</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Login