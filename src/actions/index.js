import { push } from 'react-router-redux'

export function login(email, password) {
  return dispatch => {
 		dispatch(push('/dashboard'))
	}
}