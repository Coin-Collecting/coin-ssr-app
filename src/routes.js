import React from 'react';
import { Router, Route, browserHistory, Redirect, IndexRoute } from 'react-router';

import App from './components/Homepage/';
import Container from './components/Base/';
import Collection from './components/Collection';

const Routes = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Container}>
        <IndexRoute component={App} />
        <Route
          path="/collection(/:issueId)(/:page)"
          component={Collection}
        />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Router>
  )
}

export default Routes;