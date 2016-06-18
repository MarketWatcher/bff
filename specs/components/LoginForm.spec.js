import React from "react"
import { expect } from "chai"
import { mount } from "enzyme"
import { LoginForm } from "../../src/components/LoginForm"

describe("LoginForm component", () => {
    let user = {errorMessage: ""}

    it("contains email address input", () => {
        const wrapper = mount(<LoginForm user={user}/>)
        expect(wrapper.find("#email").name()).to.equal("input")
    })
})
