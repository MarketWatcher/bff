import React, { Component } from 'react';
import * as actionCreators  from "../actions/alerts";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

export class CreateAlert extends Component {
    state = {
      alert: {
        ID: 28,
        name: '',
        ownerID: 1,
        requiredCriteria: '',
        niceTohaveCriteria: '',
        excludedCriteria: '',
        threshold: 0, 
        status: 1
      }
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.props.dispatch(push('/dashboard'));
    }

    handleSave = (e) => {
        e.preventDefault();
        this.props.actions.createAlert(this.state.alert);
    }

    handleInputChange = (field, e) => {
        var newState = this.state;
        newState.alert[field] = e.target.value;
        this.setState(newState);
    }

    render() {
        return (
        <div className="container">
            <h2 className="title">Create Alert</h2>

        <div id="alertname" className="row form-group" >
          <label htmlFor="alertnameinput" className="col-xs-3">Alert Name: </label>
          <input id="alertnameinput" required="true" maxLength="32" type="text" className="col-xs-6"
                    onChange={this.handleInputChange.bind(this.state.alert, 'name')} value={this.state.alert.name}  />
        </div>

        <div id="alertcriteria" className="row form-group" >
            <label className="col-xs-3 centering">Alert Criteria: </label>
            <div className="col-xs-6">
                <div id="req" className="row form-group" >
                  <label className="col-xs-3">Required: </label>
                  <input id="requiredinput" 
                         required="true" 
                         className="col-xs-9" 
                         type="text"
                         onChange={this.handleInputChange.bind(this.state.alert, 'requiredCriteria')}  
                         value={this.state.alert.requiredCriteria}  />
                </div>

                <div id="niceToHave form-group" className="row">
                  <label className="col-xs-3 form-group">Nice to have: </label>
                  <input id="requiredinput" 
                         className="col-xs-9" 
                         type="text"
                         onChange={this.handleInputChange.bind(this.state.alert, 'niceTohaveCriteria')}  
                         value={this.state.alert.niceTohaveCriteria}  />
                </div>

                <div id="excludedInput form-group" className="row">
                  <label className="col-xs-3 form-group">Excluded: </label>
                  <input id="excludedinput" 
                         type="text" 
                         className="col-xs-9"                                    
                         onChange={this.handleInputChange.bind(this.state.alert, 'excludedCriteria')}  
                         value={this.state.alert.excludedCriteria}  />
                </div>
              </div>
            </div>

            <div id="threshold" className="row form-group" >
              <label htmlFor="threshold" className="col-xs-3">Threshold: </label>
              <input id="threshold" 
                     type="numeric" 
                     className="col-xs-9" 
                     onChange={this.handleInputChange.bind(this.state.alert, 'threshold')}  
                     value={this.state.alert.threshold}  />
            </div>

            <div id="buttonbar" className="container pull-right">
                        <div class="row-fluid">
              <div className="col-xs-3"></div>
              <button id="cancelbutton" className="col-xs-1 pull-right" onClick={this.handleCancel}>Cancel</button>
              <button id="savebutton" className="col-xs-1 pull-right" onClick={this.handleSave} >Save</button>
                            </div>
            </div>


        </div>

        );
    }
}

const mapStateToProps = (state) => ({
  alert: state.alert
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAlert);
