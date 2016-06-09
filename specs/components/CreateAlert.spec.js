import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import ConnectedCreateAlert, { CreateAlert } from '../../src/components/CreateAlert';
import { Router } from 'react-router';

describe('CreateAlert component', () => {
    let alert = {messageVisible: false, messageStyle: "success", message: "Alert created!"};

  it('contains title', () => {
    const wrapper = shallow(<CreateAlert alert={alert}/>);
    expect(wrapper.find('h2').text()).to.equal('Create Alert');
  });

  it('contains alert label', () => {
    const wrapper = shallow(<CreateAlert alert={alert}/>);
    expect(wrapper.find('#alert-name').name()).to.equal('div');
  });

  it('contains alert criteria', () => {
    const wrapper = shallow(<CreateAlert alert={alert}/>);
    expect(wrapper.find('#alert-criteria').name()).to.equal('div');
  });

  it('contains alert threshold', () => {
    const wrapper = shallow(<CreateAlert alert={alert}/>);
    expect(wrapper.find('#alert-threshold').name()).to.equal('div');
  });

  it('contains cancel button', () => {
    const wrapper = shallow(<CreateAlert alert={alert}/>);
    var cancelButton = wrapper.find('#cancel-button');
    expect(cancelButton.name()).to.equal('button');
  });

});
