import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashBoard from './Common/DashBoard'

function Content(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <DashBoard content={'sessions'} />
        </Route>
        <Route path="/sessions">
          <DashBoard content={'sessions'} />
        </Route>
        <Route path="/mysession">
          <DashBoard content={'mysession'} />
        </Route>
      </Switch>
    </Router>
  )
}

export default Content
