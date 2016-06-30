import { UserAuthWrapper } from "redux-auth-wrapper"
import { push } from "react-router-redux"

export const Authenticated =  UserAuthWrapper({
    authSelector: state => state.auth,
    redirectAction: push,
    wrapperDisplayName: "Authenticated",
    failureRedirectPath: "/landing",
    allowRedirectBack: false,
    predicate: auth => auth.isAuthenticated
})

export const Public = UserAuthWrapper({
    authSelector: state => state.auth,
    redirectAction: push,
    wrapperDisplayName: "Public",
    failureRedirectPath: "/dashboard",
    allowRedirectBack: false,
    predicate: auth => !auth.isAuthenticated
})
