import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import ConnectedCreateAlert, { CreateAlert } from '../../src/components/CreateAlert';
import { Router } from 'react-router';

describe('<CreateAlert />', () => {

  it('contains title', () => {
    const wrapper = mount(<CreateAlert />);
    expect(wrapper.find('h2').text()).to.equal('Create Alert');
  });

  it('contains alert label', () => {
    const wrapper = mount(<CreateAlert />);
    expect(wrapper.find('#alertname').name()).to.equal('div');
  });

  it('contains alert criteria', () => {
    const wrapper = mount(<CreateAlert />);
    expect(wrapper.find('#alertcriteria').name()).to.equal('div');
  });

  it('contains alert threshold', () => {
    const wrapper = mount(<CreateAlert />);
    expect(wrapper.find('#threshold').name()).to.equal('div');
  });

  it('contains cancel button', () => {
    const wrapper = mount(<CreateAlert />);
    var cancelButton = wrapper.find('#cancelbutton');
    expect(cancelButton.name()).to.equal('button');
  });

});
