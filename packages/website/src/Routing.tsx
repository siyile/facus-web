import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Welcome from './Welcome'

function Content(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/hello" exact>
          <Welcome />
        </Route>
      </Switch>
    </Router>
  )
}

export default Content
