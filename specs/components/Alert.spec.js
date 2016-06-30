import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"
import { Alert } from "../../src/containers/Alert"

describe("Alert component", () => {
    let wrapper
    let alert = {
        name: "Sample Alert Title"
    }

    before(() => {
        wrapper = shallow(<Alert alert={alert}/>)
    })

    it("contains title", () => {
        let alertTitle = wrapper.find(".header .title")
        expect(alertTitle.text()).to.equal(alert.name)
    })
})
