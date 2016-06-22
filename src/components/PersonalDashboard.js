import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as trends from "../actions/trends"

import Trends from "./Trends"
import Notifications from "./Notifications"
import AlertMessage from "./AlertMessage"

export default class PersonalDashboard extends Component {

    componentDidMount(){
        this.props.actions.listTrends(1)
    }

    render() {
        let errorMessage = null

        if(this.props.trends.error){
            errorMessage = "There was an error retrieving trends, contact your administrator or try again later"
        }

        return (
            <div className="content">
                <div className="container">
                    <AlertMessage message={errorMessage} danger />
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <div className="card card-transparent">
                                <div className="header header-underlined">
                                    <h3 className="title">Trends</h3>
                                </div>
                                <div className="content">
                                    <div className="spacer-15"></div>
                                    <Trends trends={this.props.trends} />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="card card-transparent">
                                <div className="header header-underlined">
                                    <h3 className="title">Notifications</h3>
                                </div>
                                <div className="content">
                                    <div className="spacer-15"></div>
                                    <Notifications />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    trends: state.trends,
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(trends, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDashboard)
