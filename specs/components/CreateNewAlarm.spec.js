import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import CreateNewAlarm from '../../src/components/CreateNewAlarm';
import { Router } from 'react-router';

describe('<CreateNewAlarm />', () => {

  it('contains title', () => {
    const wrapper = mount(<CreateNewAlarm />);
    expect(wrapper.find('h2').text()).to.equal('Create New Alarm');
  });

  it('contains alarm label', () => {
    const wrapper = mount(<CreateNewAlarm />);
    expect(wrapper.find('#alarmname').name()).to.equal('div');
  });

  it('contains alarm criteria', () => {
    const wrapper = mount(<CreateNewAlarm />);
    expect(wrapper.find('#alarmcriteria').name()).to.equal('div');
  });

  it('contains alarm threshold', () => {
    const wrapper = mount(<CreateNewAlarm />);
    expect(wrapper.find('#threshold').name()).to.equal('div');
  });

  it('contains submit button', () => {
    const wrapper = mount(<CreateNewAlarm />);
    var cancelButton = wrapper.find('#cancelbutton');
    expect(cancelButton.name()).to.equal('button');
  });

});

describe('cancel button', () => {

  it('navigates to home page', () => {
    const wrapper = mount(<CreateNewAlarm />);
    var cancelButton = wrapper.find('#cancelbutton');
    cancelButton.simulate('click');
    //expect(currentRouteName.to.equal('dashboard'));
  });
});

describe('save button', () => {
  it('saves alarm data')
});
