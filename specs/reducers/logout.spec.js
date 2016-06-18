import { userReducer } from "../../src/reducers"
import { expect } from "chai"

describe("Logout reducer", () => {
    it("should change the state as not loggedIn", function() {
        const sampleUserState = {"email":"sample@example.com", "loggedIn": true}
        let logoutAction = {type: "LOGOUT"}
        let finalState = userReducer(sampleUserState, logoutAction)
        expect(finalState.loggedIn).to.equal(false)
    })

    it("should clear user mail", function() {
        const sampleUserState = {"email":"sample@example.com", "loggedIn": true}
        let logoutAction = {type: "LOGOUT"}
        let finalState = userReducer(sampleUserState, logoutAction)
        expect(finalState.email).to.be.undefined
    })
})
