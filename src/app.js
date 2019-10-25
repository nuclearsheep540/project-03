console.log('front end up and running')
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './components/common/Home'
import ProfileNew from './components/profile/ProfileNew'
import ProfileShow from './components/profile/profileShow'
// REMEMBER TO IMPORT PROFILE EDIT TO SOMEHWERE VIA A LINK

import './style.scss'


const App = () => (
  <BrowserRouter>
    <main>
      <nav>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Log in</Link>
        <Link to='/'>Home</Link>
        <Link to='/profile/new'>Profile New</Link>
      </nav>
      <Switch>
        <Route path='/profile/new' component={ProfileNew} />
        <Route path='/profile/show' component={ProfileShow} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <Route exact path='' component={Home} />
      </Switch>

    </main>
  </BrowserRouter>
   
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
