import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Link } from "react-router"
import * as alertActions from "../actions/alerts"
import { Alert } from "react-bootstrap"

export default class PersonalDashboard extends Component {

    componentDidMount(){
        this.props.actions.listAlerts(this.props.user.id)
    }

    handleAlertDismiss() {
        this.setState({alertVisible: false})
    }

    render() {
        return (
            <div className="content">
                <div className="container-fluid">
                { this.props.newAlert.messageVisible && <Alert bsStyle={this.props.newAlert.messageStyle} >
                    <h4>{this.props.newAlert.message} </h4>
                </Alert>
                }
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <div className="card">
                            <div className="header">
                                <div className="row">
                                    <div className="col-xs-2">
                                        <div className="icon-big icon-info text-center">
                                            <i className="ti-pulse"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="title">Alerts</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Placeholder />
                        <Placeholder />
                        <Placeholder />
                        <Placeholder />
                        {this.props.alerts &&
                            this.props.alerts.map((alert) => {
                                return (
                                    <div key={alert.id}>
                                        <label className="col-xs-3">{alert.name}</label>
                                        <Placeholder />
                                        <Link className="btn btn-default" to={"/alerts/" + alert.id} routerProps={{alert}}> Details </Link>
                                    </div>)
                            })
                        }
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <div className="card">
                            <div className="header">
                                <div className="row">
                                    <div className="col-xs-2">
                                        <div className="icon-big icon-danger text-center">
                                            <i className="ti-list"></i>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-xs-offset-1">
                                        <h3 className="title">Notifications</h3>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="card">
                            <div className="content">
                                Notications

                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

class Placeholder extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="card">
                    <div className="header">
                        <div className="row">
                            <div class="pull-left">
                                <a href="/alerts"><h5 className="title pull-left">Random alert title</h5> </a>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <img data-src="holder.js/200x400" className="img-thumbnail" alt="200x200" src="data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzIwMHgyMDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTRlMmY0NzRkNCB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NGUyZjQ3NGQ0Ij48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjY3LjM5ODQzNzUiIHk9IjEwNC41ODQzNzUiPjIwMHgyMDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" />
                    </div>
                    <div className="footer">

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    alerts: state.alerts,
    user: state.user,
    newAlert: state.newAlert
})

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(alertActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDashboard)
