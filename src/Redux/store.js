/* eslint-disable no-undef */
import {applyMiddleware, compose, createStore} from "redux"
import {createEpicMiddleware} from "redux-observable"
import {createLogger} from "redux-logger"
import * as storage from "redux-storage"
import createEngine from "redux-storage-engine-reactnativeasyncstorage"
import filter from "redux-storage-decorator-filter"

import {rootReducer} from "./reducers"
import {rootEpic} from "./epics"

import {authActions} from "./actions/marvelApi/auth.actions"

export const configureStore = (preloadedState) => {
	// Create engine with top level stored key.
	const engine = filter(createEngine("MarvelApp"), [
		["marvel", "auth"],
	])

	const middlewares = []
	const epicMiddleware = createEpicMiddleware()
	const logger = createLogger({})
	const storageMiddleware = storage.createMiddleware(engine, [], [authActions.CONNECT_API_DONE, authActions.DISCONNECT_API_DONE])

	middlewares.push(epicMiddleware)
	middlewares.push(storageMiddleware)
	// Add logger only if in dev mode.
	if (process.env.NODE_ENV !== "production") {
		middlewares.push(logger)
	}

	const middlewareEnhancer = applyMiddleware(...middlewares)
	const enhancers = [middlewareEnhancer]
	const composedEnhancers = compose(...enhancers)
	const store = createStore(storage.reducer(rootReducer), preloadedState, composedEnhancers)

	//TOOD make it works.
	// Load saved state.
	storage.createLoader(engine)(store)
		.then((state) => {
			console.log("LOADING success", state)
		})
		.catch((err) => {
			console.log("LOADING fails cause of ", err)
		})

	// Initialize epics
	epicMiddleware.run(rootEpic)

	return store
}