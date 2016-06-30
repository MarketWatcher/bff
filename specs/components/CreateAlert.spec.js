import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"
import { CreateAlert } from "../../src/containers/CreateAlert"

describe("CreateAlert component", () => {
    let alert = {}
    let auth = {user: {id: 1}}

    it("contains title", () => {
        const wrapper = shallow(<CreateAlert auth={auth} alert={alert}/>)
        expect(wrapper.find("h4").text()).to.equal("Create Alert")
    })

    it("contains alert title", () => {
        const wrapper = shallow(<CreateAlert auth={auth} alert={alert}/>)
        expect(wrapper.find("#alert-title").name()).to.equal("input")
    })

    it("contains alert threshold", () => {
        const wrapper = shallow(<CreateAlert auth={auth} alert={alert}/>)
        expect(wrapper.find("#threshold").name()).to.equal("input")
    })

    it("contains cancel button", () => {
        const wrapper = shallow(<CreateAlert auth={auth} alert={alert}/>)
        var cancelButton = wrapper.find("#cancel")
        expect(cancelButton.name()).to.equal("a")
    })

})
