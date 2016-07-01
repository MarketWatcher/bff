import React, { Component } from "react"
import { login }  from "../actions"
import { connect } from "react-redux"

export class LoginForm extends Component {
    state = {email: "", password: ""}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(login(this.state.email, this.state.password))
    }

    handleInputChange = (field, e) => {
        var newState = this.state
        newState[field] = e.target.value
        this.setState(newState)
    }

    render() {
        return (
            <div className="card opacity-95">
                <div className="header header-underlined ">
                    <h4 className="title">Login</h4>
                </div>
                <div className="content">
                    <form onSubmit={this.handleSubmit}>
                        {this.props.auth.error && this.props.auth.incorrectCredentials &&
                            <div>
                                <span id="error-text" className="text-danger">Incorrect email or password</span>
                            </div>
                        }
                        {this.props.auth && this.props.auth.error && !this.props.auth.incorrectCredentials &&
                            <div>
                                <span id="error-text" className="text-danger">There was an error logging in</span>
                            </div>
                        }
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" className="form-control border-input" id="email" placeholder="Enter E-mail" autoFocus value={this.state.email}  onChange={this.handleInputChange.bind(this, "email")}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control border-input" id="password" placeholder="Password" value={this.state.password}  onChange={this.handleInputChange.bind(this, "password")}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-info btn-fill btn-wd pull-right" onClick={this.handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(LoginForm)
