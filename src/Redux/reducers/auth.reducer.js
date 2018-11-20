import { AuthActions } from "~/Redux/actions/auth.actions"

const initialState = {
	auth : ""
}


export default (state = initialState, action) => {
	switch(action.type) {
	case AuthActions.CONNECT :
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
