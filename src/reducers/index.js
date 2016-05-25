import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

export default combineReducers({
	routing: routerReducer,
	user: (state = {}, action) => {
		switch(action.type) {
			case 'LOGIN_SUCCESSFUL':
				return action.user;
			case 'LOGIN_UNSUCCESSFUL':
				return {};
			default:
				return state;
		}
	}
});