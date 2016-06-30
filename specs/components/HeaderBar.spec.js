import React from "react"

import { expect } from "chai"
import { mount} from "enzyme"
import { HeaderBar } from "../../src/containers/HeaderBar"


describe("Header Bar component", () => {

    it("contains logout button if loggedIn", function() {
        const auth = {isAuthenticated: true, user: { email:"sample@example.com", id: 1}}

        const wrapper = mount(<HeaderBar auth={auth} />)
        expect(wrapper.find("#logout").name()).to.equal("a")
    })

    it("doesnt contain logout link if not loggedIn", function() {
        const auth = {isAuthenticated: false, user: { email:"sample@example.com", id: 1}}

        const wrapper = mount(<HeaderBar auth={auth} />)
        expect(wrapper.find("#logout")).to.have.length(0)
    })
})
