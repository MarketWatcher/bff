import React from "react"
import { expect } from "chai"
import { mount } from "enzyme"
import { LoginForm } from "../../src/containers/LoginForm"

describe("LoginForm component", () => {
    const auth = {isAuthenticated: true, user: { email:"sample@example.com", id: 1}}

    it("contains email address input", () => {
        const wrapper = mount(<LoginForm auth={auth}/>)
        expect(wrapper.find("#email").name()).to.equal("input")
    })
})
