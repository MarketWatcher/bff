import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import { expect } from 'chai'
import * as actionCreators from '../../src/actions/index'

describe("Login action creator", () => {
    it("should throw new LOGIN_SUCCESSFUL action if credentials provided", () => {
        let loginAction = actionCreators.login("user1@mail.com", "passOne")
        expect(loginAction.type).to.equal("LOGIN_SUCCESSFUL")
    })

    it("should throw new LOGIN_UNSUCCESSFUL action if credentials not provided", () => {
        let loginAction = actionCreators.login("", "")
        expect(loginAction.type).to.equal("LOGIN_UNSUCCESSFUL")
    })
})
