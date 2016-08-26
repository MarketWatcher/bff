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
    content: Immutable.List([])
}, action) {
    switch(action.type) {
    case "TRENDS_REQUEST":
        return Object.assign({}, state, {
            isFetching: true,
            content: Immutable.List([])
        })
    case "TRENDS_SUCCESSFUL":
        return Object.assign({}, state, {
            isFetching: false,
            content: Immutable.List(action.response.map((alert) => {
                return {
                    alert: alert,
                    delta: null
                }
            }))
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
        return Object.assign({}, state, {
            isFetching: false,
            content: state.content.update(
                state.content.findIndex((trend) => trend.alert.id ===  action.response.alertId),
                (trend) => Object.assign(trend, { delta: action.response.delta}))
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
