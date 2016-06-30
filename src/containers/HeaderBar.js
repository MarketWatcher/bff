import React, { Component } from "react"
import { logout }  from "../actions"
import { connect } from "react-redux"
import { Link } from "react-router"

export class HeaderBar extends Component {

    logoutClicked = () => {
        this.props.dispatch(logout())
    }

    renderWelcomeMessage(auth) {
        return auth.isAuthenticated ?
            <li>
                <a id="user-email" className="disabled disabled-link-no-hover">
                    <p><i className="fa fa-user"></i> Logged in as <b>{auth.user.email}</b></p>
                </a>
            </li> : ""

    }

    renderLogoutButton(header) {
        return header.props.auth.isAuthenticated ?
            <li>
                <a href="#" id="logout" onClick={header.logoutClicked}>
                    <p><i className="fa fa-sign-out"></i> Log Out</p>
                </a>
            </li> : ""
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">MARKET WATCHER</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            {this.renderWelcomeMessage(this.props.auth)}
                            {this.renderLogoutButton(this)}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default connect()(HeaderBar)
