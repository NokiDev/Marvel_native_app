import { AuthActions } from "~/Redux/actions/auth.actions"

const initialState = {
	auth : ""
}


export default (state = initialState, action) => {
	switch(action.type) {
	case AuthActions.CONNECT :
		// STORE in async api_key pub, pri

		return {
			...state,
			auth: action.auth
		}
	case AuthActions.DISCONNECT :
		// Unstore
		return {
			...state,
			auth: {

			}
		}
	default :
		return state
	}
}
