import { push } from "react-router-redux"
import { success } from "./site-notifications"

import { CALL_API } from "../middleware/api"

export function listAlerts(userId) {
    return {
        [CALL_API] : {
            endpoint: `/api/alerts/owner_id/${userId}`,
            types: ["ALERTS_REQUEST", "ALERTS_SUCCESSFUL", "ALERTS_FAILURE"]
        }
    }
}

export function findAlertById(id) {
    return {
        [CALL_API] : {
            endpoint: `/api/alerts/id/${id}`,
            types: ["ALERT_REQUEST", "ALERT_SUCCESSFUL", "ALERT_FAILURE"]
        }
    }
}

export function createAlert(alert) {
    return dispatch => {
        let transformedAlert = {
            owner_id : alert.ownerID,
            name : alert.name,
            required_criteria : alert.requiredCriteria,
            nice_to_have_criteria : alert.niceTohaveCriteria,
            excluded_criteria : alert.excludedCriteria,
            threshold : parseInt(alert.threshold, 10),
            status : 1
        }
        
        dispatch({
            [CALL_API]: {
                endpoint: "/api/alerts",
                types: ["CREATE_ALERT_REQUEST", "CREATE_ALERT_SUCCESSFUL", "CREATE_ALERT_FAILURE"],
                config: {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(transformedAlert)
                },
                onResponse: () => {
                    dispatch(success("Alert was created", 10000))
                    dispatch(push("/dashboard"))
                }
            }
        })
    }
}

export function cancelCreateAlert() {
    return dispatch => {
        dispatch({
            type: "CREATE_ALERT_CANCEL"
        })
        dispatch(push("/dashboard"))
    }
}

export function resetCreateAlert() {
    return dispatch => {
        dispatch({
            type: "RESET_ALERT_STATE"
        })
    }
}
