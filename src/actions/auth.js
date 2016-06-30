import { push } from "react-router-redux"
import { CALL_API } from "../middleware/api"


function loginApiCall(email, password) {
    return {
        [CALL_API] : {
            endpoint: "/api/authenticate",
            types: ["LOGIN_REQUEST", "LOGIN_SUCCESS", "LOGIN_FAILURE"],
            config: {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password})
            },
            onResponse: response => localStorage.setItem("user", JSON.stringify(response)),
            onError: () => localStorage.removeItem("user")
        }
    }

}

export function login(email, password) {
    return dispatch => {
        dispatch(requestLogin(email, password))
        dispatch(loginApiCall(email, password))
        dispatch(push("/dashboard"))
    }
}

function requestLogin(email, password) {
    return {
        type: "LOGIN_REQUEST",
        isFetching: true,
        isAuthenticated: false,
        creds: {email, password}
    }
}


export function logout() {
    return dispatch => {
        localStorage.removeItem("user")
        dispatch({
            type : "LOGOUT",
            isFetching: false,
            isAuthenticated: false
        })
        dispatch(push("/landing"))
    }
}
