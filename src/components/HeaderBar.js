import React, { Component} from 'react';
import * as actionCreators  from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

export class HeaderBar extends Component {

	logoutClicked = () => {
		this.props.actions.dispatchLogout();
	}

	render() {
		return (
		  <Navbar>
		  <Navbar.Header>
			<Navbar.Brand>
				<Link className="navbar-brand" to="/">Market Watcher</Link>
		    </Navbar.Brand>
	        </Navbar.Header>
	        <Navbar.Collapse>
				<Nav pullRight>
				{this.props.user.loggedIn ?
					<NavItem eventKey={1}><div>
									 Welcome <b>{this.props.user.email}</b>
								</div></NavItem>
								: ''}
			        <NavItem eventKey={2}><div>
									{this.props.user.loggedIn ? <button id="logout-button" onClick={this.logoutClicked}>Log out</button> : ''}
								</div></NavItem>
			        
	      		</Nav>
      		</Navbar.Collapse>
		  </Navbar>

		);
	}
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);