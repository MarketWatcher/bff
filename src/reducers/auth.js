export default function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem("user") ? true : false,
    user: JSON.parse(localStorage.getItem("user"))
}, action) {
    switch(action.type) {
    case "LOGIN_REQUEST":
        return Object.assign({}, state, {
            isFetching: true,
            isAuthenticated: false,
            user: action.creds
        })
    case "LOGIN_SUCCESS":
        return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: true,
            user: action.response
        })
    case "LOGIN_FAILURE":
        return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: false,
            error: action.error,
            incorrectCredentials: action.status == 401
        })
    case "LOGOUT":
        return Object.assign({}, {
            isFetching: false,
            isAuthenticated: false
        })
    case "INVALID_TOKEN":
        return Object.assign({}, {
            isFetching: false,
            isAuthenticated: false
        })
    default:
        return state
    }
}
