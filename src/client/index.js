import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store from '../store'
import App from '../containers/app'
import ReactDOM from 'react-dom';
import Home from '../containers/home';
import About from '../containers/about';
import { Router, Route } from 'react-router-dom';

import history from './history';

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
  </Provider>,
  target
)
