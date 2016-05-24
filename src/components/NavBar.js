import React, { Component} from 'react';

export default class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-fixed-top navbar-color-on-scroll">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="/">Market Watcher</a>
					</div>
				</div>
			</nav>
		);
	}
}
