import React, { Component } from "react"
import * as alertActions from "../actions/alerts"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

export class Alert extends Component {
    componentDidMount() {
        this.props.actions.findById(this.props.params.id)
    }

    render() {
        return (
            <div className="alert-detail panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.alert.name}</h3>
                </div>
                <div className="panel-body">
                    Panel content
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    alert: state.alert
})

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(alertActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Alert)
