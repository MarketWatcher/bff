import React, { Component } from 'react';
import {connect} from "react-redux";
import {push} from 'react-router-redux';
import { Link } from 'react-router';

export default class PersonalDashboard extends Component {

	handleCreationRedirect = (e) => {
		e.preventDefault();
		this.props.dispatch(push('/createalarm'));
	}

	render() {
		return (
			<div className="wrapper">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h3 className="panel-title">My Alarms</h3>
								</div>
								<div className="panel-body">
									<Placeholder />
									<Placeholder />
									<Placeholder />
									<Placeholder />
								</div>
								<div className="panel-body bottom-right pull-right">
									<Link className="btn btn-primary" to="/createalarm">Create Alarm</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h3 className="panel-title">My Notifications</h3>
								</div>
								<div className="panel-body">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class Placeholder extends Component {
	render() {
		return (
				<img data-src="holder.js/200x200" className="img-thumbnail" alt="200x200" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzIwMHgyMDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTRlMmY0NzRkNCB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NGUyZjQ3NGQ0Ij48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjY3LjM5ODQzNzUiIHk9IjEwNC41ODQzNzUiPjIwMHgyMDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" />

		);
	}
}

export default connect()(PersonalDashboard);
