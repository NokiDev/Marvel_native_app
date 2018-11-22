import {
		connectApiDone,
		disconnectApiDone,
		fetchComicsFailure,
		fetchComicsSuccess,
		marvelAPIActions
} from "../actions/marvelApi.actions"
import {ofType} from "redux-observable"
import {catchError, map, mergeMap} from "rxjs/operators"
import {from, of} from "rxjs"
import {AjaxGetRequestFactory} from "~/Utils/Marvel_API/request_helper"
// STORAGE.
import {AsyncStorage} from "react-native"


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
							if (pub_key && priv_key) {
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

export const fetchComicsEpic = (action$, state$) => action$.pipe(
	ofType(marvelAPIActions.FETCH_COMICS),
	mergeMap(() => {
		const state = state$.value
		return AjaxGetRequestFactory(
			`${state.marvelApiReducers.baseUrl}/comics`,
			state.marvelApiReducers.apiKeys.private,
			state.marvelApiReducers.apiKeys.public,
			{
				offset: state.marvelApiReducers.comics.offset
			}
		).pipe(
			map(ajaxRequest => {
				return fetchComicsSuccess(ajaxRequest.response.data.results)
			}),
			catchError(error => {
				return of(fetchComicsFailure(error))
			})
		)
	})
)