import authentication from "./auth.reducer"
import marvel from "./marvelApi.reducer"
//import theme from './theme.reducer'
import { combineReducers } from "redux"


export const rootReducer = combineReducers({
	authentication,
	marvel
})
