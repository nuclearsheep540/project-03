console.log('front end up and running')
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Register from './components/auth/Register'

const App = () => (
  <BrowserRouter>
    <main>
      <nav>
        <Link to='/register'>Sign Up</Link>
      </nav>
      <Switch>
        <Route path="/register" component={Register} />
      </Switch>

    </main>
  </BrowserRouter>
   
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
