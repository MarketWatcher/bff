import { combineReducers } from "redux"
import { routerReducer as routing } from "react-router-redux"
import siteNotifications from "./site-notifications"
import { trend, trends } from "./trends"
import auth from "./auth"
import { alerts, alert, newAlert } from "./alerts"

export default combineReducers({
    routing, auth, siteNotifications, alerts, alert, newAlert, trend, trends
})
