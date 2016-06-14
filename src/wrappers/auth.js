import { UserAuthWrapper } from "redux-auth-wrapper"
import { replace } from "react-router-redux"

export const Authenticated =  UserAuthWrapper({
    authSelector: state => state.user,
    redirectAction: replace,
    wrapperDisplayName: "Authenticated",
    failureRedirectPath: "/landing",
    predicate: user => user.loggedIn
})

export const Public = UserAuthWrapper({
    authSelector: state => state.user,
    redirectAction: replace,
    wrapperDisplayName: "Public",
    failureRedirectPath: "/dashboard",
    predicate: user => !user.loggedIn
})
