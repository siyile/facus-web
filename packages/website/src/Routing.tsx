import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import SignIn from './features/Register/SignIn'
import Register from './features/Register/Register'
import DashBoard from './Common/DashBoard'

function Content(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <DashBoard content={'sessions'} />
        </Route>
        <Route path="/match">
          <DashBoard content={'match'} />  
        </Route> 
        <Route path="/sessions">
          <DashBoard content={'sessions'} />
        </Route>
        <Route path="/mysession">
          <DashBoard content={'mysession'} />
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
