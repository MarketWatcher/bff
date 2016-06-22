export default class TrendApi {
    static list(userId, cb, err) {
        let alertServiceURL = `/api/trends/user/${userId}`
        fetch(alertServiceURL)
        .then(res => res.json())
        .then(json => cb(json))
        .catch(ex => err(ex))
    }
}
