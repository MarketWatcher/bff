import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import { expect } from 'chai';
import * as actionCreators from '../../src/actions/create-alert';

describe("Create alert action creator", () => {
	it("should throw new ALERT_SAVE_SUCCESSFUL action if criteria provided", () => {
		let loginAction = actionCreators.saveAlert('alert1', 'tw', 'ThoughtWorks, good', 'bad', 1000);
		expect(loginAction.type).to.equal('ALERT_SAVE_SUCCESSFUL');
	});

    it("should throw new ALERT_SAVE_UNSUCCESSFUL action if criteria not provided", () => {
		let loginAction = actionCreators.saveAlert('alert2', '', 'ThoughtWorks, good', 'bad', 1000);
		expect(loginAction.type).to.equal('ALERT_SAVE_UNSUCCESSFUL');
	});
});
