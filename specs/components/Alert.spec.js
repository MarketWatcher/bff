import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Alert } from '../../src/components/Alert';
import { Router } from 'react-router';

describe('Alert component', () => {
  let wrapper;
  let alert ={
    name: 'Sample Alert Title'
  };

  before(() => {
    wrapper = shallow(<Alert alert={alert}/>);
  });

  it('contains title', () => {
    let alertTitle = wrapper.find('.panel-title');
    expect(alertTitle.text()).to.equal(alert.name);
  });

});
