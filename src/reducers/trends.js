export default function trendReducer(state = [], action) {
    switch(action.type) {
    case "GET_TRENDS_SUCCESSFUL":
        return action.trends
    case "GET_TRENDS_UNSUCCESSFUL":
        return {error: true, message: action.error + ""}
    default:
        return state

    }
}
