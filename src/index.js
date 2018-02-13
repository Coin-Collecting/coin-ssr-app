import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import { responsiveStateReducer, responsiveStoreEnhancer } from 'redux-responsive'
import reducers  from './redux/reducers';

import Routes from './routes';

// REDUX
export const store = createStore(
  combineReducers({
    browser: responsiveStateReducer,
    reducers,
  }),
  responsiveStoreEnhancer
);

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

const client = new ApolloClient({
  networkInterface,
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
