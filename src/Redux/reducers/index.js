import authentication from "./auth.reducer"
import marvel from "./marvelApi.reducer"
//import theme from './theme.reducer'
import { combineReducers } from "redux"
import { combineEpics } from "redux-observable"
import { connectApiEpic } from "../actions/marvelApi.actions"

export const rootEpic = combineEpics(
	connectApiEpic
);

export const rootReducer = combineReducers({
	authentication,
	marvel
})
