import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    routing: routerReducer,
    user: userReducer,
    alert: (state = {}, action) => {
        switch(action.type) {
            case 'ALERT_RECEIVED':
                return action.alert;
            case 'ALERT_NOT_FOUND':
                return {error: 404};
            default:
                return state;
        }
    },
    createAlert: (state = {}, action) => {
        switch(action.type) {
            case 'ALERT_SAVE_SUCCESSFUL':
                return action.alert;
            case 'ALERT_SAVE_UNSUCCESSFUL':
                return state;
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
