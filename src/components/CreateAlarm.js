import React, { Component } from 'react';

export default class CreateAlarm extends Component {
	render() {
		return (
    	<div className="container">
  		  <h2 className="title">Create Alarm</h2>

        <div id="alarmname" className="row form-group" >
          <label htmlFor="alarmnameinput" className="col-xs-3">Alarm Name: </label>
          <input id="alarmnameinput" required="true" maxLength="32" type="text" className="col-xs-6" value={this.props.alarmName}  />
        </div>

        <div id="alarmcriteria" className="row form-group" >
            <label className="col-xs-3 centering">Alarm Criteria: </label>
            <div className="col-xs-6">
                <div id="req" className="row form-group" >
                  <label className="col-xs-3">Required: </label>
                  <input id="requiredinput" required="true" className="col-xs-9" type="text" value={this.props.required}  />
                </div>

                <div id="niceToHave form-group" className="row">
                  <label className="col-xs-3 form-group">Nice to have: </label>
                  <input id="requiredinput" className="col-xs-9" type="text" value={this.props.niceTohave}  />
                </div>

                <div id="excludedInput form-group" className="row">
                  <label className="col-xs-3 form-group">Excluded: </label>
                  <input id="excludedinput" type="text" className="col-xs-9" value={this.props.excluded}  />
                </div>
              </div>
          </div>

            <div id="threshold" className="row form-group" >
              <label htmlFor="alarmthreshold" className="col-xs-3">Threshold: </label>
              <input id="alarmthreshold" type="number" min="1" max="1000000" className="col-xs-6" value={this.props.alarmThreshold}  />
            </div>

            <div id="buttonbar" className="container">
                          <div className="col-xs-3 pull-right"></div>
              <button id="cancelbutton" className="col-xs-1 pull-right">Cancel</button>
              <button id="savebutton" className="col-xs-1 pull-right">Save</button>

            </div>


        </div>

        );
	}
}
