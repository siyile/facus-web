import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Learn from './Learn'
import Home from './Home'

function Content(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/learn" exact>
          <Learn />
        </Route>
      </Switch>
    </Router>
  )
}

export default Content
