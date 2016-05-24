import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/material-kit.css';
import './assets/styles/style.css';

import App from './components/App.js';
import Landing from './components/Landing.js';
import PersonalDashboard from './components/PersonalDashboard.js';


render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRedirect to="/landing" />
			<Route path="landing" component={Landing} />
			<Route path="dashboard" component={PersonalDashboard} />
		</Route>
	</Router>
), document.getElementById('content'))
