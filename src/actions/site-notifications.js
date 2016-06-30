const defaultNotificationAction = {
    type: "PUSH_NOTIFICATION",
    notification: {type: "info"}
}

export function error(text, timeout = 3000) {
    return Object.assign(defaultNotificationAction, {
        notification: {text, timeout, type: "error"}
    })
}

export function warn(text, timeout = 3000) {
    return Object.assign(defaultNotificationAction, {
        notification: {text, timeout, type: "warn"}
    })
}

export function success(text, timeout = 3000) {
    return Object.assign(defaultNotificationAction, {
        notification: {text, timeout, type: "success"}
    })
}

export function info(text, timeout = 3000) {
    return Object.assign(defaultNotificationAction, {
        notification: {text, timeout, type: "info"}
    })
}

export function create(type = "info", text, timeout = 3000) {
    return Object.assign(defaultNotificationAction, {
        notification: {text, timeout, type}
    })
}
