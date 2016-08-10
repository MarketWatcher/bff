export default function trendReducer(state = {
    isFetching: false,
    content: []
}, action) {
    switch(action.type) {
    case "TRENDS_REQUEST":
        return Object.assign({}, state, {
            isFetching: true
        })
    case "TRENDS_SUCCESSFUL":
        var trends = action.response.map((alert) => {
            return {
                delta: Math.ceil(Math.random() * 10000) - 5000,
                alert: alert
            }
        })

        return Object.assign({}, state, {
            isFetching: false,
            content: trends
        })
    case "TRENDS_FAILURE":
        return Object.assign({}, state, {
            isFetching: false,
            content: [],
            error: action.error
        })
    default:
        return state

    }
}
