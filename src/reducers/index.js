import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
	routing: routerReducer,
	user: (state = {}, action) => {
		switch(action.type) {
			case 'LOGIN_SUCCESSFUL':
			case 'LOGIN_UNSUCCESSFUL':
				return action.user;
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
