export class NotificationActionFactory {
    static defaultNotificationAction = {
        type: "PUSH_NOTIFICATION",
        notification: {type: "info"}
    }

    static error = (text, timeout = 3000) => {
        return Object.assign(NotificationActionFactory.defaultNotificationAction, {notification: {text, timeout, type: "error"}})
    }

    static warn = (text, timeout = 3000) => {
        return Object.assign(NotificationActionFactory.defaultNotificationAction, {notification: {text, timeout, type: "warning"}})
    }

    static success = (text, timeout = 3000) => {
        return Object.assign(NotificationActionFactory.defaultNotificationAction, {notification: {text, timeout, type: "success"}})
    }

    static info = (text, timeout = 3000) => {
        return Object.assign(NotificationActionFactory.defaultNotificationAction, {notification: {text, timeout, type: "info"}})
    }

    static create = (text, type, timeout = 3000) => {
        return Object.assign(NotificationActionFactory.defaultNotificationAction, {notification: {text, timeout, type}})
    }
}

export function error(text, timeout = 3000) {
    return dispatch => {
        dispatch(NotificationActionFactory.error(text, timeout))
    }
}

export function warn(text, timeout = 3000) {
    return dispatch => {
        dispatch(NotificationActionFactory.warn(text, timeout))
    }
}

export function success(text, timeout = 3000) {
    return dispatch => {
        dispatch(NotificationActionFactory.success(text, timeout))
    }
}

export function info(text, timeout = 3000) {
    return dispatch => {
        dispatch(NotificationActionFactory.info(text, timeout))
    }
}

export function create(text, type = "info", timeout = 3000) {
    return dispatch => {
        dispatch(NotificationActionFactory. create(text, type, timeout))
    }
}
