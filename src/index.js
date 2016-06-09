import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import {Authenticated, Public} from './wrappers/auth';

import thunk from 'redux-thunk';
import reducers from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/animate.min.css';
import './assets/styles/paper-dashboard.css';
import './assets/styles/style.css';
import './assets/styles/themify-icons.css';

import App from './components/App';
import Landing from './components/Landing';

import PersonalDashboard from './components/PersonalDashboard';

import Alert from './components/Alert';
import CreateAlert from './components/CreateAlert';

import DevTools from './containers/DevTools';

let store = (compose(applyMiddleware(...[thunk], routerMiddleware(browserHistory)), DevTools.instrument())(createStore))(reducers);
let history = syncHistoryWithStore(browserHistory, store);

const routerComponent = (
  <Router history={history}>
      <Route path="/" component={App}>
          <IndexRedirect to='/dashboard'/>
          <Route path="landing" component={Public(Landing)} />
          <Route path="dashboard" component={Authenticated(PersonalDashboard)} />
          <Route path="createalert" component={Authenticated(CreateAlert)}/>
          <Route path="alerts/:id" component={Authenticated(Alert)}/>
      </Route>
  </Router>
);

if(__DEVELOPMENT__ && !window.devToolsExtension){
  render((
      <Provider store={store}>
        <div className="wrapper">
            {routerComponent}
            <DevTools/>
        </div>
      </Provider>
  ), document.getElementById('content'));
}else{
  render((
      <Provider store={store}>
        <div className="wrapper">
            {routerComponent}
        </div>
      </Provider>
  ), document.getElementById('content'));
}
