import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import Beer from './pages/beer'

const Routes = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/beers/:id" component={Beer} />
    </Switch>
  </BrowserRouter>

)

export default Routes;