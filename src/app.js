console.log('front end up and running')
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Register from './components/auth/Register'
import Login from './components/auth/Login'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

import ProfileNew from './components/profile/ProfileNew'
import Show from './components/profile/Show'
import ShowExt from './components/profile/ShowExt'
import ProfileEdit from './components/profile/ProfileEdit'

import RequestsIndex from './components/reqs/RequestsIndex'
import RequestShow from './components/reqs/RequestShow'
import RequestEdit from './components/reqs/RequestEdit'
import RequestsNew from './components/reqs/RequestsNew'
import UsersIndex from './components/contributors/UsersIndex'

// import Testingstuff from './components/common/Testingstuff'




// REMEMBER TO IMPORT PROFILE EDIT TO SOMEHWERE VIA A LINK

import 'normalize.css'
import './style.scss'




const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />
      <Switch>
        <Route path='/contributors' component={UsersIndex} />
        <Route path='/requests/:id/edit' component={RequestEdit} />
        <Route path='/requests/new' component={RequestsNew} />
        <Route path='/requests/:id' component={RequestShow} /> 
        <Route path='/requests' component={RequestsIndex} />
        <Route path='/profile/new' component={ProfileNew} />
        <Route exact path='/profile/show' component={Show} />
        <Route path='/profile/show/:id' component={ShowExt}/>
        <Route path='/profile/:id/edit' component={ProfileEdit} />
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
