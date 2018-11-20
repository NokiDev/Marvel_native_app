import { marvelAPIActions, disconnectApiDone, connectApiDone, fetchComics, fetchComicsSuccess, fetchComicsFailure } from "../actions/marvelApi.actions"
import { ofType } from "redux-observable"
import { mergeMap, map, tap, catchError, switchMap } from "rxjs/operators"
import { from, Observable } from "rxjs"
import { ajax } from "rxjs/ajax"

// STORAGE.
import { AsyncStorage } from "react-native"


// Store api keys in local storage.
export const connectApiEpic = (action$) => action$.pipe(
	ofType(marvelAPIActions.CONNECT_API),
	map(action => {
		AsyncStorage.setItem("public_key", action.payload.public)
		AsyncStorage.setItem("private_key", action.payload.private)

		return connectApiDone(action.payload.private, action.payload.public, action.payload.navigation)
	})
)

// Remove api keys from store.
export const disconnectApiEpic = (action$) => action$.pipe(
	ofType(marvelAPIActions.DISCONNECT_API),
	mergeMap(action =>
		from(AsyncStorage.removeItem("public_key")).pipe(
			mergeMap(() =>
				from(AsyncStorage.removeItem("private_key")).pipe(
					map(() => {
						return disconnectApiDone(action.payload.navigation)
					}),
					tap(() => {
						action.payload.navigation.navigate("Auth")
					})
				)
			)
		)
	)
)

// Remove api keys from store.

export const connectDoneEpic = (action$) => action$.pipe(
	ofType(marvelAPIActions.CONNECT_API_DONE),
	map(
		action => {
			action.payload.navigation.navigate("Home")
			return {type: "NOP"}
		}
	)
)

export const disconnectDoneEpic = (action$) => action$.pipe(
	ofType(marvelAPIActions.DISCONNECT_API_DONE),
	map(
		action => {
			action.payload.navigation.navigate("Auth")
			return {type: "NOP"}
		}
	)
)

export const resumeConnectApiEpic = (action$) => action$.pipe(
	ofType(marvelAPIActions.RESUME_CONNECT_API),
	mergeMap(action =>
		from(AsyncStorage.getItem("public_key")).pipe(
			mergeMap(pub_key =>
				from(AsyncStorage.getItem("private_key")).pipe(
					map(priv_key => {
						if(pub_key && priv_key) {
							return connectApiDone(priv_key, pub_key, action.payload.navigation)
						}
						else {
							return disconnectApiDone(action.payload.navigation)
						}
					})
				)
			)
		)
	)
)

export const fetchComicsEpic = (action$) => action$.pipe(
		ofType(marvelAPIActions.FETCH_COMICS),
 		switchMap(() => {
 			 return ajax
				.getJSON("https://gateway.marvel.com/v1/public/comics")
		})
)
