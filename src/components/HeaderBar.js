import React, { Component } from "react"
import * as actionCreators  from "../actions"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Link } from "react-router"

export class HeaderBar extends Component {

    logoutClicked = () => {
        this.props.actions.dispatchLogout()
    }

    renderWelcomeMessage(header) {
        return header.props.user.loggedIn ?
            <li>
                <a className="disabled disabled-link-no-hover">
                    <p><i className="fa fa-user"></i> Logged in as <b>{header.props.user.email}</b></p>
                </a>
            </li> : ""

    }

    renderLogoutButton(header) {
        return header.props.user.loggedIn ?
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
                            {this.renderWelcomeMessage(this)}
                            {this.renderLogoutButton(this)}
                        </ul>

                    </div>
                </div>
            </nav>
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
