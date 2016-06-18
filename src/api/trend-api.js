export default class TrendApi {
    static list(userId, cb, err) {
        let alertServiceURL = `http://localhost:8000/trends/user/${userId}`
        fetch(alertServiceURL)
        .then(res => res.json())
        .then(json => cb(json))
        .catch(ex => err(ex))
    }
}
