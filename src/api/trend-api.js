export default class TrendApi {
    static list(userId, cb, err) {
        let trendServiceURL = `/api/alerts/owner_id/${userId}`
        fetch(trendServiceURL)
        .then(res => { return res.json() })
        .then(json => {
        	let alerts = json.map((alert) => {
        		return {
        			delta: 0,
        			alert: alert
        		}
        	})

        	return cb(alerts)
        })
        .catch(ex => err(ex))
    }


}
	