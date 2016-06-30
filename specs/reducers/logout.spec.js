import auth from "../../src/reducers/auth"
import { expect } from "chai"

describe("Logout reducer", () => {
    it("should change the state as not loggedIn", function() {
        const sampleAuthState = {isAuthenticated: true, user: {email: "sample@example.com", loggedIn: true}}
        let logoutAction = {type: "LOGOUT"}
        let finalState = auth(sampleAuthState, logoutAction)
        expect(finalState.isAuthenticated).to.equal(false)
    })

    it("should clear user info", function() {
        const sampleAuthState = {isAuthenticated: true, user: {email: "sample@example.com", loggedIn: true}}
        let logoutAction = {type: "LOGOUT"}
        let finalState = auth(sampleAuthState, logoutAction)
        expect(finalState.user).to.be.undefined
    })
})
