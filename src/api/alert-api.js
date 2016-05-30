import {ALERT_SERVICE_URL} from '../service-config';

export default class AlertApi {
	static find(alertId, cb, err) {
		fetch(`${ALERT_SERVICE_URL}/alerts/id/${alertId}`)
			.then(res => res.json())
			.then(json => cb(json))
			.catch(ex => err(ex))
	}
} 
