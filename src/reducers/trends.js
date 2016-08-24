import Immutable from "immutable"

export function trend(state = {
    isFetching: false,
    content: {}
}, action) {
    switch(action.type) {
    case "TREND_REQUEST":
        return Object.assign({}, state, {
            isFetching: true
        })
    case "TREND_SUCCESSFUL":
        return Object.assign({}, state, {
            isFetching: false,
            content: action.response
        })
    case "TREND_FAILURE":
        return Object.assign({}, state, {
            isFetching: false,
            content: [],
            error: action.error
        })
    default:
        return state
    }
}

export function trends(state = {
    isFetching: false,
    content: Immutable.Map({})
}, action) {
    switch(action.type) {
    case "TRENDS_REQUEST":
        return Object.assign({}, state, {
            isFetching: true
        })
    case "TRENDS_SUCCESSFUL":
        return Object.assign({}, state, {
            isFetching: false,
            content: Immutable.Map(action.response.reduce((trends, alert) => {
                trends[alert.id] = {
                    delta: 0,
                    alert: alert
                }
                return trends
            }, {}))
        })
    case "TRENDS_FAILURE":
        return Object.assign({}, state, {
            isFetching: false,
            content: Immutable.Map({}),
            error: action.error
        })
    case "TREND_REQUEST":
        return Object.assign({}, state, {
            isFetching: true
        })
    case "TREND_SUCCESSFUL":
        state.content.set(`${action.response.alertId}`, Object.assign(state.content.get(`${action.response.alertId}`), {
            delta: action.response.delta
        }))

        return Object.assign({}, state, {
            isFetching: false
        })
    case "TREND_FAILURE":
        return Object.assign({}, state, {
            isFetching: false,
            error: action.error
        })
    default:
        return state
    }
}
