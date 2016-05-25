import React, { Component } from 'react';
import * as actionCreators  from "../actions"
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

export default class LoginForm extends Component {
	state = {email: '', password: ''}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.actions.login(this.state.email, this.state.password);
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
						<div className="form-group">
							<label for="exampleInputEmail1">Email address</label>
							<input className="form-control" id="exampleInputEmail1" placeholder="Email" value={this.state.email} onChange={this.handleInputChange.bind(this, 'email')}/>
						</div>
						<div className="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password}  onChange={this.handleInputChange.bind(this, 'password')}/>
						</div>

						<button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
					</form>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

