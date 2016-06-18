import TrendApi from "../api/trend-api"

export function listTrends(userId) {
    return dispatch => {
        TrendApi.list(userId, (trends) => {
            dispatch({
                type: "GET_TRENDS_SUCCESSFUL",
                trends: trends
            })
        }, (error) => {
            dispatch({
                type: "GET_TRENDS_UNSUCCESSFUL",
                error: error
            })
        })
    }
}
