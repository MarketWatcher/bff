import React, { Component } from "react"
import * as actionCreators  from "../actions"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { FormControl, ControlLabel } from "react-bootstrap"

export class LoginForm extends Component {
    state = {email: ", password: "}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.actions.dispatchLogin(this.state.email, this.state.password)
    }

    handleInputChange = (field, e) => {
        var newState = this.state
        newState[field] = e.target.value
        this.setState(newState)
    }

    render() {
        return (
            <div className="card opacity-95">
                <div className="header-underline header ">
                    <h4 className="title">Login</h4>
                </div>
                <div className="content">
                    <form onSubmit={this.handleSubmit}>
                        {this.props.user.errorMessage?
                            <div className="has-error">
                                <span>{this.props.user.errorMessage}</span>
                            </div> : ""}
                        <div className="row"><div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="password">Email Address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter E-mail" id="email" value={this.state.email}  onChange={this.handleInputChange.bind(this, "email")}/>
                            </div>
                        </div></div>
                        <div className="row"><div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.password}  onChange={this.handleInputChange.bind(this, "password")}/>
                            </div>
                        </div></div>
                        <div className="row"><div className="col-md-12">
                            <button type="submit" className="btn btn-info btn-fill btn-wd pull-right" onClick={this.handleSubmit.bind(this)}>Submit</button>
                        </div></div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
