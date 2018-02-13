import React from 'react';
import { Router, Route, browserHistory, Redirect, IndexRoute } from 'react-router';

import App from './App';
import Custom from './Custom';
import Container from './Container';

const Routes = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Container}>
        <IndexRoute component={App} />
        <Route path="/custom" component={Custom} />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Router>
  )
}

export default Routes;