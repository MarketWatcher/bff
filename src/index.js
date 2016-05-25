import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'

import thunk from 'redux-thunk'
import reducers from './reducers'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css';

import App from './components/App.js';
import Landing from './components/Landing.js';
import PersonalDashboard from './components/PersonalDashboard.js';

let store = (compose(applyMiddleware(...[thunk], routerMiddleware(browserHistory)))(createStore))(reducers);
let history = syncHistoryWithStore(browserHistory, store);


render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRedirect to="/landing" />
				<Route path="landing" component={Landing} />
				<Route path="dashboard" component={PersonalDashboard} />
			</Route>
		</Router>
	</Provider>
), document.getElementById('content'))
