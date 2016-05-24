import React, { Component} from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<Link className="navbar-brand" to="/">Market Watcher</Link>
					</div>

					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/dashboard">Personal Dashboard</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
