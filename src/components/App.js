import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

export default class App extends Component {
	render() {
		return (
			<div className="landing-page">
				<NavBar />
				{this.props.children}
				<Footer />
			</div>
		);
	}
};
