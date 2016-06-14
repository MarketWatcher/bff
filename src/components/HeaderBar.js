import React, { Component } from "react"
import * as actionCreators  from "../actions"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Navbar, Nav, NavItem } from "react-bootstrap"
import { Link } from "react-router"

export class HeaderBar extends Component {

    logoutClicked = () => {
        this.props.actions.dispatchLogout()
    }

    renderWelcomeMessage(header) {
        return header.props.user.loggedIn ?
            <NavItem eventKey={1}>
                <div>
                     Welcome <b>{header.props.user.email}</b>
                </div>
            </NavItem> : ""
    }

    renderLogoutButton(header) {
        return header.props.user.loggedIn ?
            <NavItem eventKey={2}>
                <div>
                    <a href="#" id="logout" onClick={header.logoutClicked}><i className="ti-user"></i> Log out</a>
                </div>
            </NavItem> : ""
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
                        {this.renderWelcomeMessage(this)}
                        {this.renderLogoutButton(this)}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar)
