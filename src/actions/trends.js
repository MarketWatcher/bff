import { CALL_API } from "../middleware/api"

export function getTrend(alertId) {
    return {
        [CALL_API] : {
            endpoint: `/api/trends/alert-id/${alertId}`,
            types: ["TREND_REQUEST", "TREND_SUCCESSFUL", "TREND_FAILURE"]
        }
    }
}

export function listTrends(userId) {
    return dispatch => {
        dispatch({
            [CALL_API] : {
                endpoint: `/api/alerts/owner_id/${userId}`,
                types: ["TRENDS_REQUEST", "TRENDS_SUCCESSFUL", "TRENDS_FAILURE"],
                onResponse: (alerts) => {
                    for(let alert of alerts){
                        dispatch(getTrend(alert.id))
                    }
                }
            }
        })
    }
}
