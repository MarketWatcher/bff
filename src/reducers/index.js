import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    routing: routerReducer,
    user: userReducer,
    alerts: (state = [], action) => {
        switch(action.type) {
            case 'ALERTS_RECEIVED':
                return action.alerts;
            case 'ALERTS_NOT_RECEIVED':
                return {error: 404};
            case 'ALERT_SAVE_SUCCESSFUL':
                return state.push(action.alert);
            default:
                return state;
        }
    },
    alert: (state = {}, action) => {
        switch(action.type) {
            case 'GET_ALERT_SUCCESSFUL':
                return action.alert;
            case 'GET_ALERT_UNSUCCESSFUL':
                return {message: 'get alert failed: ' + action.error.message};
            default:
                return state;
        }
    },
    newAlert: (state = {}, action) => {
        switch(action.type) {
            case 'CREATE_ALERT_SUCCESSFUL':
                state = { alert: action.alert, messageVisible: true, messageStyle: "success", message: "Alert created!"};
                return state;
            case 'CREATE_ALERT_UNSUCCESSFUL':
                state = { alert: action.alert, messageVisible: true, messageStyle: "danger", message: action.error.message};
                return state;
            case 'CREATE_ALERT_CANCEL':
                state = { messageVisible: false, messageStyle: ""};
                return state;
            case 'RESET_ALERT_STATE':
                state = { alert: {}, messageVisible: false, messageStyle: "", message: ""};
            default:
                return state;
        }
    }
});

export function userReducer(userState = {}, action) {
	switch(action.type) {
		case 'LOGIN_SUCCESSFUL':
		case 'LOGIN_UNSUCCESSFUL':
			return action.user;
		case 'LOGOUT':
			userState = {loggedIn : false};
			return Object.assign({}, userState);
		default:
			return userState;
	}
}
