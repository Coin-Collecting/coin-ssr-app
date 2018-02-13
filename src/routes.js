import React from 'react';
import { Router, Route, browserHistory, Redirect, IndexRoute } from 'react-router';

import { createStore, combineReducers } from 'redux';
import { responsiveStateReducer, responsiveStoreEnhancer } from 'redux-responsive'
import reducers  from './redux/reducers';
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';
import { Provider } from 'react-redux'

import App from './components/Homepage/';
import Container from './components/Base/';
import Collection from './components/Collection';

// APOLLO
const networkInterface = createNetworkInterface({
  uri: 'http://api.mycoin.store/graphql',
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    req.options.headers.authorization = token ? token : null;
    next();
  }
}]);

const apolloClient = new ApolloClient({
  networkInterface,
  ssrMode: true,
});

// REDUX
export const store = createStore(
  combineReducers({
    browser: responsiveStateReducer,
    reducers,
  }),
  responsiveStoreEnhancer
);

const Routes = props => {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
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
      </ApolloProvider>
    </Provider>
  )
}

export default Routes;