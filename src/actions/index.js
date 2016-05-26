import { push } from 'react-router-redux'

let users = {
	'user1@mail.com': 'passOne',
	'userone@mail.com': 'passOne',
	'a': 'a'
}

export function login(email, password) {
  return dispatch => {
  		const valid = email != '' || password != ''
  		const correctCredentials = users[email] == password

  		if(valid && correctCredentials) {
  			dispatch({
				type : 'LOGIN_SUCCESSFUL',
				user: {email : email, loggedIn: true}
			});
			
 			dispatch(push('/dashboard'));
  		} else {
  			dispatch({
				type: 'LOGIN_UNSUCCESSFUL',
				user: {loggedIn: false, errorMessage: 'Username and password did not match'}
  			});
  		}
	}
}
