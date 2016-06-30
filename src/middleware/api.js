import {error as errorNotification} from "../actions/site-notifications"

function callApi(endpoint, config) {
    let token = (localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")).token : null
    if(token) {
        if(!config) config = {headers: {}}
        config = Object.assign({}, config, {
            headers: Object.assign(config.headers, { "x-access-token": token })
        })
    }

    return fetch(endpoint, config)
        .then(response => response.text().then(text => ({text, response})))
        .then(({text, response}) => {
            if (!response.ok) return Promise.reject({
                status: response.status,
                message: text
            })

            return JSON.parse(text)
        })
}

export const CALL_API = Symbol("Call API")

export default store => next => action => {
    const callAPI = action[CALL_API]
    if (typeof callAPI === "undefined") {
        return next(action)
    }

    let { endpoint, config, types, onResponse, onError } = callAPI
    const [ requestType, successType, errorType ] = types

    next({
        type: requestType,
        isFetching: true
    })

    return callApi(endpoint, config, onResponse, onError).then(
        response => {
            if(onResponse) onResponse(response)
            next({
                response,
                type: successType
            })
        },
        error => {
            if(onError) onError(error)
            if(error.status == "403")  {
                next({
                    type: "INVALID_TOKEN"
                })

                return next(errorNotification("Your session timed out or id token was invalid, please log in again", 5000))
            }
            next({
                status: error.status,
                error: error.message || "There was an error.",
                type: errorType
            })
        }
    )
}
