import authentication from "./auth.reducer"
import marvelApiReducers from "./marvelApi.reducer"
//import theme from './theme.reducer'
import { combineReducers } from "redux"


export const rootReducer = combineReducers({
	authentication,
	 marvelAuth: marvelApiReducers.marvelAuthentication,
	 marvelComics: marvelApiReducers.marvelComics
})
