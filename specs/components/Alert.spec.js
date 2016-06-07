import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Alert } from '../../src/components/Alert';
import { Router } from 'react-router';

describe('Alert component', () => {
  let wrapper;
  let alert ={
    title: 'Sample Alert Title'
  };

  before(() => {
    wrapper = shallow(<Alert alert={alert}/>);
  });

  it('contains title', () => {
    expect(wrapper.contains(<h3 class="panel-title">{alert.title}</h3>)).to.equal(true);
  });

});
