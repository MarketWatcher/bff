import {ALERT_SERVICE_URL} from '../service-config';

export default class AlertApi {
    static list(cb, err) {
        fetch(`${ALERT_SERVICE_URL}/api/alerts`)
            .then(res => res.json())
            .then(json => cb(json))
            .catch(ex => err(ex));
    }
}
