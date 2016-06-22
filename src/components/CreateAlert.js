import React, { Component } from "react"
import * as actionCreators  from "../actions/alerts"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import schema from "../schemas/alert"
import Validator from "../utils/validator"
import classNames from "classnames"
import AlertMessage from "./AlertMessage"

export class CreateAlert extends Component {
    state = {
        alert: {
            name: "",
            ownerID: 1,
            requiredCriteria: "",
            niceTohaveCriteria: "",
            excludedCriteria: "",
            threshold: "",
            status: 1
        }
    }

    componentDidMount() {
        this.props.actions.resetAlertState()
    }

    validator = new Validator(schema)

    handleCancel = (e) => {
        e.preventDefault()
        this.props.actions.cancel()
    }

    handleSave = (e) => {
        e.preventDefault()
        this.validator.validate(this.state.alert)
        this.forceUpdate()
        if(this.validator.isValid)
            this.props.actions.createAlert(this.state.alert)
    }

    handleInputChange = (field, e) => {
        let newState = this.state
        newState.alert[field] = e.target.value

        this.setState(newState)
        this.validator.validateField(field, e.target.value)
    }

    render() {
        let errorMessage = null
        if(this.props.alertRequestStatus && this.props.alertRequestStatus.messageVisible){
            errorMessage = "There was an error creating the alert"
        }

        return (
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <AlertMessage message={errorMessage} danger/>
                            <div className="card">
                                <div className="header header-underlined">
                                    <h4 className="title">Create Alert</h4>
                                </div>
                                <div className="content">
                                    <form>
                                        <CreateAlertInputRow field="name" errors={this.validator.errors}>
                                            <label className="form-control-label">Alert Title</label>
                                            <input id="alert-title" maxLength="32" autoFocus type="text" className="form-control border-input"
                                                onChange={this.handleInputChange.bind(this, "name")} value={this.state.alert.name} />
                                        </CreateAlertInputRow>
                                        <div className="row bordered-spacer-10"></div>
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <label>Alert Criteria</label>
                                            </div>
                                        </div>
                                        <CreateAlertInputRow field="requiredCriteria" errors={this.validator.errors} horizontal>
                                            <label className="col-sm-3">Must include</label>
                                            <div className="col-sm-9">
                                                <input className="form-control border-input" id="must-include" onChange={this.handleInputChange.bind(this, "requiredCriteria")}
                                                value={this.state.alert.requiredCriteria}/>
                                            </div>
                                        </CreateAlertInputRow>
                                        <CreateAlertInputRow field="niceTohaveCriteria" errors={this.validator.errors} horizontal>
                                            <label className="col-sm-3">Can include</label>
                                            <div className="col-sm-9">
                                                <input className="form-control border-input" id="can-include" onChange={this.handleInputChange.bind(this, "niceTohaveCriteria")}
                                                value={this.state.alert.niceTohaveCriteria}/>
                                            </div>
                                        </CreateAlertInputRow>
                                        <CreateAlertInputRow field="excludedCriteria" errors={this.validator.errors} horizontal>
                                            <label className="col-sm-3">Exclude</label>
                                            <div className="col-sm-9">
                                                <input className="form-control border-input" id="exclude" onChange={this.handleInputChange.bind(this, "excludedCriteria")}
                                                value={this.state.alert.excludedCriteria}/>
                                            </div>
                                        </CreateAlertInputRow>
                                        <div className="bordered-spacer-10"></div>
                                        <CreateAlertInputRow field="threshold" errors={this.validator.errors}>
                                            <label>Threshold</label>
                                            <input id="threshold" type="number" className="form-control border-input"
                                                onChange={this.handleInputChange.bind(this, "threshold")} value={this.state.alert.threshold} />
                                        </CreateAlertInputRow>
                                        <div className="row">
                                            <div className="col-md-6 col-md-offset-6 text-right">
                                                <button type="submit" id="save-alert" className="btn btn-info btn-fill btn-wd" onClick={this.handleSave}>Create</button>
                                                &nbsp;
                                                <button id="cancel" className="btn btn-danger btn-fill btn-wd" onClick={this.handleCancel}>Cancel</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

/* eslint-disable */
class CreateAlertInputRow extends Component {
    render() {
        let field = this.props.field
        let error = this.props.errors[field]

        let errorTextId = `${field}-error`
        return (
            <div className="row">
                <div className={classNames("col-md-12 form-group", {"has-error": error})}>
                    {this.props.children}
                    {error &&
                        <small id={errorTextId} className={classNames("text-danger", {"col-sm-9 col-sm-offset-3": this.props.horizontal})}>{error.message}</small>
                    }
                </div>
            </div>
        )
    }
}
/* eslint-enable */

const mapStateToProps = (state) => ({
    alertRequestStatus: state.newAlert,
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateAlert)
