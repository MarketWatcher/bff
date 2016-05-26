import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware, syncHistoryWithStore, replace } from 'react-router-redux'
import {UserAuthWrapper} from 'redux-auth-wrapper';

import thunk from 'redux-thunk'
import reducers from './reducers'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css';

import App from './components/App';
import Landing from './components/Landing';
import PersonalDashboard from './components/PersonalDashboard';
import CreateAlarm from './components/CreateAlarm';

let store = (compose(applyMiddleware(...[thunk], routerMiddleware(browserHistory)))(createStore))(reducers);
let history = syncHistoryWithStore(browserHistory, store);

const UserIsAuthenticated = UserAuthWrapper({
	authSelector: state => state.user,
	redirectAction: replace,
	wrapperDisplayName: 'UserIsAuthenticated',
	failureRedirectPath: 'landing',
	predicate: user => user.loggedIn
})


const RedirectIfAuthenticated = UserAuthWrapper({
	authSelector: state => state.user,
	redirectAction: replace,
	wrapperDisplayName: 'RedirectIfAuthenticated',
	failureRedirectPath: 'dashboard',
	predicate: user => !user.loggedIn
})

render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRedirect to='/dashboard'/>
				<Route path="landing" component={RedirectIfAuthenticated(Landing)} />
				<Route path="dashboard" component={UserIsAuthenticated(PersonalDashboard)} />
				<Route path="createalarm" component={CreateAlarm} />
			</Route>
		</Router>
	</Provider>
), document.getElementById('content'))
