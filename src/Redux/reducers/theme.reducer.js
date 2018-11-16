import { AuthActions, connect, disconnect } from '@/Redux/actions/auth.actions'

export default reducer = (state, action) => {
  switch(action.type){
    case AuthActions.CONNECT :
      return {
        ...state,
        auth: action.auth
      }
    case AuthActions.DISCONNECT :
      return {
        ...state,
        auth: {

        }
      }
    default :
      return state
  }
}
