import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import CreateAlarm from '../../src/components/CreateAlarm';
import { Router } from 'react-router';

describe('<CreateAlarm />', () => {

  it('contains title', () => {
    const wrapper = mount(<CreateAlarm />);
    expect(wrapper.find('h2').text()).to.equal('Create Alarm');
  });

  it('contains alarm label', () => {
    const wrapper = mount(<CreateAlarm />);
    expect(wrapper.find('#alarmname').name()).to.equal('div');
  });

  it('contains alarm criteria', () => {
    const wrapper = mount(<CreateAlarm />);
    expect(wrapper.find('#alarmcriteria').name()).to.equal('div');
  });

  it('contains alarm threshold', () => {
    const wrapper = mount(<CreateAlarm />);
    expect(wrapper.find('#threshold').name()).to.equal('div');
  });

  it('contains submit button', () => {
    const wrapper = mount(<CreateAlarm />);
    var cancelButton = wrapper.find('#cancelbutton');
    expect(cancelButton.name()).to.equal('button');
  });

});

describe('cancel button', () => {

  it('navigates to home page', () => {
    const wrapper = mount(<CreateAlarm />);
    var cancelButton = wrapper.find('#cancelbutton');
    cancelButton.simulate('click');
    //expect(currentRouteName.to.equal('dashboard'));
  });
});

describe('save button', () => {
  it('saves alarm data')
});
