import React, { Component } from "react"
import * as actionCreators  from "../actions/alerts"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Alert } from "react-bootstrap"

export class CreateAlert extends Component {
    state = {
        alert: {
            name: "",
            ownerID: 1,
            requiredCriteria: "",
            niceTohaveCriteria: "",
            excludedCriteria: "",
            threshold: 0,
            status: 1
        }
    }

    componentDidMount() {
        this.props.actions.resetAlertState()
    }

    handleCancel = (e) => {
        e.preventDefault()
        this.props.actions.cancel()
    }

    handleSave = (e) => {
        e.preventDefault()
        this.props.actions.createAlert(this.state.alert)
    }

    handleInputChange = (field, e) => {
        var newState = this.state
        newState.alert[field] = e.target.value
        this.setState(newState)
    }

    render() {
        return (
        <div className="container">
        { this.props.alert.messageVisible && <Alert bsStyle={this.props.alert.messageStyle}>
            <h4>{this.props.alert.message}</h4>
        </Alert>
        }
            <h2 className="title">Create Alert</h2>

        <div id="alert-name" className="row form-group" >
          <label htmlFor="alert-name-input" className="col-xs-3">Alert Name: </label>
          <input id="alert-name-input" required="true" maxLength="32" type="text" className="col-xs-6"
                    onChange={this.handleInputChange.bind(this.state.alert, "name")} value={this.state.alert.name}  />
        </div>

        <div id="alert-criteria" className="row form-group">
            <label className="col-xs-3">Alert Criteria: </label>
            <div className="col-xs-6">
                <div id="req" className="form-group row" >
                  <label className="col-xs-3">Required: </label>
                  <input id="required-input"
                         required="true"
                         className="col-xs-9"
                         type="text"
                         onChange={this.handleInputChange.bind(this.state.alert, "requiredCriteria")}
                         value={this.state.alert.requiredCriteria}  />
                </div>

                <div id="nice-to-have" className="form-group row">
                  <label className="col-xs-3">Nice to have: </label>
                  <input id="required-input"
                         className="col-xs-9"
                         type="text"
                         onChange={this.handleInputChange.bind(this.state.alert, "niceTohaveCriteria")}
                         value={this.state.alert.niceTohaveCriteria}  />
                </div>

                <div id="excluded-input" className="form-group row">
                  <label className="col-xs-3">Excluded: </label>
                  <input id="excluded-input"
                         type="text"
                         className="col-xs-9"
                         onChange={this.handleInputChange.bind(this.state.alert, "excludedCriteria")}
                         value={this.state.alert.excludedCriteria}  />
                </div>
              </div>
            </div>

            <div id="alert-threshold" className="form-group row" >
              <label htmlFor="threshold" className="col-xs-3">Threshold: </label>
              <input id="threshold"
                     type="numeric"
                     className="col-xs-2"
                     onChange={this.handleInputChange.bind(this.state.alert, "threshold")}
                     value={this.state.alert.threshold}  />
            </div>

            <div id="button-bar" className="row form-group">
              <div className="col-xs-3 pull-right">
                <button id="save-button" className="btn-success" onClick={this.handleSave}>Save</button>
              </div>
              <div className="col-xs-3 pull-right">
                <button id="cancel-button" className="btn-default pull-right" onClick={this.handleCancel}>Cancel</button>
              </div>
            </div>

        </div>

        )
    }
}

const mapStateToProps = (state) => ({
    alert: state.newAlert,
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateAlert)
