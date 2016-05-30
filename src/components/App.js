import React, { Component } from 'react';

import * as actionCreators  from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import NavBar from './NavBar';
import Footer from './Footer';


export class App extends Component {
	render() {
		return (
			<div>
				<NavBar user={this.props.user}/>
        		<div className="navbar-placeholder"/>
					{this.props.children}
				<Footer />
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	user: state.user
});

export default connect(mapStateToProps)(App);
