export default class AlertApi {
    static list(cb, err) {
        fetch(`/api/alerts/`)
            .then(res => res.json())
            .then(json => cb(json))
            .catch(ex => err(ex));
    }

    static findById(id, cb, err) {
        fetch(`/api/alerts/id/${id}`)
            .then(res => res.json())
            .then(json => cb(json))
            .catch(ex => err(ex));
    }
}
