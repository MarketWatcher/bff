import { push } from "react-router-redux"

let users = {
    "user1@mail.com": "passOne",
    "userone@mail.com": "passOne",
    "a": "a"
}

export function login(email, password) {
    const valid = email && password
    const correctCredentials = users[email] == password

    if (valid && correctCredentials) {
        return {
            type : "LOGIN_SUCCESSFUL",
            user: {email : email, loggedIn: true, id: 1}
        }
    } else {
        return {
            type: "LOGIN_UNSUCCESSFUL",
            user: {loggedIn: false, errorMessage: "Username and password did not match"}
        }
    }
}

export function dispatchLogin(email, password) {
    return dispatch => {
        dispatch(login(email, password))
        dispatch(push("/dashboard"))
    }
}

export function dispatchLogout() {
    return dispatch => {
        dispatch(logout())
        dispatch(push("/landing"))
    }
}

export function logout() {
    return {type : "LOGOUT"}
}
