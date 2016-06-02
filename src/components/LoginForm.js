import React, { Component } from 'react';
import * as actionCreators  from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { FormControl, ControlLabel } from 'react-bootstrap';

export class LoginForm extends Component {
    state = {email: '', password: ''}

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.actions.dispatchLogin(this.state.email, this.state.password);
    }

    handleInputChange = (field, e) => {
        var newState = this.state;
        newState[field] = e.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">LOGIN</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                        {this.props.user.errorMessage?
                            <div className="has-error">
                                <span>{this.props.user.errorMessage}</span>
                            </div> : ''}
                        <div className="form-group">
                            <ControlLabel>Email address</ControlLabel>
                            <FormControl placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange.bind(this, 'email')}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password}  onChange={this.handleInputChange.bind(this, 'password')}/>
                        </div>

                        <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
