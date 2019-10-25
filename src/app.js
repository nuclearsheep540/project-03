console.log('front end up and running')
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './components/common/Home'

import './style.scss'


const App = () => (
  <BrowserRouter>
    <main>
      <nav>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Log in</Link>
        <Link to='/'>Home</Link>
      </nav>
      <Switch>
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
