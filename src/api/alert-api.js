
export default class AlertApi {

    static list(cb, err) {
        let alertServiceURL = 'http://backend:8000/alerts/';
        fetch(alertServiceURL)
        .then(res => res.json())
        .then(json => cb(json))
        .catch(ex => err(ex));
    }

    static findById(id, cb, err) {
        fetch('http://backend:8000/alerts/id/${id}')
        .then(res => res.json())
        .then(json => cb(json))
        .catch(ex => err(ex));
    }

    static createAlert(newAlert, cb, err) {
        let convertedAlert = {
                "ID" : newAlert.ID,
                "OwnerID" : newAlert.ownerID,
                "Name" : newAlert.name,
                "RequiredCriteria" : newAlert.requiredCriteria,
                "NiceToHaveCriteria" : newAlert.niceTohaveCriteria,
                "ExcludedCriteria" : newAlert.excludedCriteria,
                "Threshold" : parseInt(newAlert.threshold, 10),
                "Status" : 1
            };
        fetch('http://backend:8000/alerts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(convertedAlert)
        })
        .then(res => res.json())
        .then(json => cb(json))
        .catch(ex => err(ex));
    }
}
