import React, { Component} from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<Link className="navbar-brand" to="/">Market Watcher</Link>
					</div>
					<div>
						{this.props.user.loggedIn? <p className="navbar-text navbar-right">Welcome <b>{this.props.user.email}</b></p> : ''}
					</div>
				</div>
			</nav>
		);
	}
}
