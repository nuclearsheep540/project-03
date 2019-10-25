import React from 'react'
import Axios from 'axios'

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
        //set token
        //set name
        //set state of name to name
        this.props.history.push('/profile')
        console.log(this.state.name)
        console.log('res = ', res)
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