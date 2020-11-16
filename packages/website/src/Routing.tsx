import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Learn from './Learn'
import Home from './Home'
import SignIn from './features/Register/SignIn'
import Register from './features/Register/Register'
import DashBoard from './features/Common/DashBoard'

function Content(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard" exact>
          <DashBoard />
        </Route>
        <Route path="/learn" exact>
          <Learn />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
      </Switch>
    </Router>
  )
}

export default Content
