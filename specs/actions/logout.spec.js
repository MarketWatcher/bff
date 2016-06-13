import React from "react"
import ReactTestUtils from "react-addons-test-utils"

import { expect } from "chai"
import HeaderBar from "../../src/components/HeaderBar"
import * as actionCreators from "../../src/actions"

describe("Logout action creator", () => {
    it("should throw new logout action", () => {
        let logoutAction = actionCreators.logout()
        expect(logoutAction.type).to.equal("LOGOUT")
    })
})
