import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { HeaderBar } from '../../src/components/HeaderBar';
import { Link } from 'react-router';


describe("Header Bar component", () => {

  it("contains logout button if loggedIn", function() {

  	const sampleUser = {"email":"sample@example.com", "loggedIn": true};

    const wrapper = mount(<HeaderBar user={sampleUser} />);
    expect(wrapper.find('#logout').name()).to.equal('a');
  });

  it("doesnt contain logout link if not loggedIn", function() {

  	const sampleUser = {"email":"sample@example.com", "loggedIn": false};

    const wrapper = mount(<HeaderBar user={sampleUser} />);
    expect(wrapper.find('#logout')).to.have.length(0);
  });
});
