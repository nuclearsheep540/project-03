console.log('front end up and running')
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './components/common/Home'
import ProfileNew from './components/profile/ProfileNew'
import ProfileShow from './components/profile/ProfileShow'
import Navbar from './components/common/Navbar'

// REMEMBER TO IMPORT PROFILE EDIT TO SOMEHWERE VIA A LINK

import 'normalize.css'
import './style.scss'




const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />
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
