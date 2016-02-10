import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import createRouter from './containers/Routes';
import configureStore from './store/configureStore';
import DevTools from './containers/DevTools';
import 'font-awesome/css/font-awesome.min.css';

const store = configureStore(window.__INITIAL_STATE__);
const rootElem = document.getElementById('root');

render(
  <Provider store={store}>
      { createRouter(browserHistory) }
  </Provider>,
  rootElem
);

// re-render with redux devtools in development
if (__DEV__ && __DEVTOOLS__) {
  render(
    <Provider store={store}>
      <div>
        { createRouter(browserHistory) }
        <DevTools />
      </div>
    </Provider>,
    rootElem
  );
}
