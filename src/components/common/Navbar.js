import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      userLogged: ''
    }

  }
  //logout function using Auth.logout and props push

  render() {
    return (
      <nav>
        <div>
          <Link to='/home'>Home</Link>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Login</Link>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)