import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/auth'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      userLogged: ''
    }
    this.logout = this.logout.bind(this)
  }

  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  render() {
    return (
      <nav>
        <Link to='/' className='logo'><div className='home-button'>Home</div></Link>
        {!Auth.isAuthenticated() && <Link to='/register'><div className='nav-item'>Register</div></Link>}
        {!Auth.isAuthenticated() && <Link to='/login'><div className='nav-item'>Log in</div></Link>}
        {Auth.isAuthenticated() && <Link to='/profile/show/'><div className='nav-item'>Profile</div></Link>}
        {Auth.isAuthenticated() && <Link to='/' onClick={this.logout}><div className='nav-item'>Logout {Auth.getName()}</div></Link>}
        <Link to='/requests'> <div className='nav-item'>Requests</div></Link>
        <Link to='/contribute'> <div className='nav-item'>Contribute</div></Link>
      </nav>
    )
  }
}

export default withRouter(Navbar)