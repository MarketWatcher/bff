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
        				<Link className="navbar-brand" to="/">MARKET WATCHER</Link>
        		    </Navbar.Brand>
        	    </Navbar.Header>
        	    <Navbar.Collapse>
        			<Nav pullRight>
        				{renderWelcomeMessage(this)}
        				{renderLogoutButton(this)}
        	      	</Nav>
              	</Navbar.Collapse>
                </Navbar>

		);
	}
}

function renderWelcomeMessage(header) {
	return header.props.user.loggedIn ?
		<NavItem eventKey={1}>
			<div>
				 Welcome <b>{header.props.user.email}</b>
			</div>
		</NavItem> : '';
}

function renderLogoutButton(header) {
    return header.props.user.loggedIn ?
        <NavItem eventKey={2}>
            <div>
                <button id="logout-button" onClick={header.logoutClicked}>Log out</button>
			</div>
        </NavItem> : '';
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
