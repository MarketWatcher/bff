export function alerts(state = { isFetching: false, content: [] }, action) {
    switch(action.type) {
    case "ALERTS_REQUEST":
        return Object.assign({}, state, {
            isFetching: true
        })
    case "ALERTS_SUCCESSFUL":
        return Object.assign({}, state, {
            isFetching: false,
            content: action.response
        })
    case "ALERTS_FAILURE":
        return Object.assign({}, state, {
            isFetching: false,
            content: [],
            error: action.error
        })
    default:
        return state

    }
}

export function alert(state = { isFetching: false, content: {} }, action) {
    switch(action.type) {
    case "ALERT_REQUEST":
        return Object.assign({}, state, {
            isFetching: true
        })
    case "ALERT_SUCCESSFUL":
        return Object.assign({}, state, {
            isFetching: false,
            content: action.response
        })
    case "ALERT_FAILURE":
        return Object.assign({}, state, {
            isFetching: false,
            error: action.error
        })
    default:
        return state

    }
}

export function newAlert(state = { isFetching: false, content: {} }, action) {
    switch(action.type) {
    case "CREATE_ALERT_REQUEST":
        return Object.assign({}, state, {
            isFetching: true
        })
    case "CREATE_ALERT_SUCCESSFUL":
        return Object.assign({}, state, {
            isFetching: false,
            content: action.response
        })
    case "CREATE_ALERT_FAILURE":
        var error = "There was an error creating the alert"

        if(action.status == 409) {
            error = "You already created an alert with the same title, please pick a different title"
        }
        return Object.assign({}, state, {
            isFetching: false,
            error: error
        })
    case "CREATE_ALERT_CANCEL":
    case "RESET_ALERT_STATE":
        return Object.assign({}, state, {
            isFetching: false,
            content: {}
        })
    default:
        return state
    }
}
