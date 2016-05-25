import { push } from 'react-router-redux'

let users = {
	'user1@mail.com': 'passOne',
	'userone@mail.com': 'passOne',
	'a': 'a'
}

export function login(email, password) {
  return dispatch => {
  		
 		dispatch(push('/dashboard'))
	}
}