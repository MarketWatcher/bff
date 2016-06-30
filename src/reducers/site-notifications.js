import Immutable from "immutable"
const getTime = () => {
    let d = new Date()
    return d.getTime()
}

export default function siteNotificationReducer(state = Immutable.List([]), action) {
    switch(action.type) {
    case "PUSH_NOTIFICATION":
        var newNotification = Object.assign({id: getTime()}, action.notification)
        return state.push(newNotification)
    case "REMOVE_NOTIFICATION":
        return state.filter((notification) => notification.id !== action.id)
    default:
        return state
    }
}
