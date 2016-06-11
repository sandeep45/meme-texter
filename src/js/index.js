import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'

import routes from './routes'
import App from './components/App'
import configureStore from './configureStore'
import {fetchPhoneNumbers,fetchMessages,doSearch,updateInstanceImageUrl} from "./actions"

const initialStoreState = {}

let store = configureStore(initialStoreState);
window.store = store; // for debugging only

store.dispatch(fetchPhoneNumbers());
store.dispatch(fetchMessages());
store.dispatch(doSearch(store.getState().message.tag));

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
