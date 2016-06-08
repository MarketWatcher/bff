
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
                "owner_id" : newAlert.ownerID,
                "name" : newAlert.name,
                "required_criteria" : newAlert.requiredCriteria,
                "nice_to_have_criteria" : newAlert.niceTohaveCriteria,
                "excluded_criteria" : newAlert.excludedCriteria,
                "threshold" : parseInt(newAlert.threshold, 10),
                "status" : 1 
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


