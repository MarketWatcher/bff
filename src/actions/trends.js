import { CALL_API } from "../middleware/api"

export function listTrends(userId) {
    return {
        [CALL_API] : {
            endpoint: `/api/alerts/owner_id/${userId}`,
            types: ["TRENDS_REQUEST", "TRENDS_SUCCESSFUL", "TRENDS_FAILURE"]
        }
    }
}
