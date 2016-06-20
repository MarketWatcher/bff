export default class AlertApi {
    static list(ownerId, cb, err) {
        let alertServiceURL = `/api/alerts/owner_id/${ownerId}`
        fetch(alertServiceURL)
        .then(res => res.json())
        .then(json => cb(json))
        .catch(ex => err(ex))
    }

    static findById(id, cb, err) {
        fetch(`/api/alerts/id/${id}`)
        .then(res => res.json())
        .then(json => cb(json))
        .catch(ex => err(ex))
    }

    static createAlert(newAlert, cb, err) {
        let convertedAlert = {
            "owner_id" : newAlert.ownerID,
            "name" : newAlert.name,
            "required_criteria" : newAlert.requiredCriteria,
            "nice_to_have_criteria" : newAlert.niceTohaveCriteria,
            "excluded_criteria" : newAlert.excludedCriteria,
            "threshold" : parseInt(newAlert.threshold, 10),
            "status" : 1
        }

        fetch("/api/alerts", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(convertedAlert)
        })
        .then(res => {
            if (res.status != 200) {
                return res.json().then(json => {
                    throw new Error(json.alert_error_message)
                })
            }
            return res
        })
        .then(json => cb(json))
        .catch(ex => err(ex))
    }
}
