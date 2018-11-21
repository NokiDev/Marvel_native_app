import { applyMiddleware, compose, createStore } from "redux"
import {rootReducer} from "./reducers"
import {rootEpic} from "./epics"
import { createEpicMiddleware } from "redux-observable"
import { createLogger } from "redux-logger"
import * as storage from 'redux-storage'

import createEngine from 'redux-storage-engine-reactnativeasyncstorage'


export const configureStore = (preloadedState) => {
	// Create engine with top level stored key.
	const engine = createEngine('MarvelApp');
	const middlewares = []
	const epicMiddleware = createEpicMiddleware()
	const logger = createLogger({})
	const storageMiddleware = storage.createMiddleware(engine)

	middlewares.push(epicMiddleware)
	middlewares.push(storageMiddleware)
	// Add logger only if in dev mode.
	if (process.env.NODE_ENV != 'production') {
		middlewares.push(logger);
	}

	const middlewareEnhancer = applyMiddleware(...middlewares)
	const enhancers = [middlewareEnhancer]
	const composedEnhancers = compose(...enhancers)
	const store = createStore(storage.reducer(rootReducer), preloadedState, composedEnhancers)

	// Load saved state.
	storage.createLoader(engine)()
		.then((newState) => console.log('Loaded state:', newState))
		.catch(() => console.log('Failed to load previous state'));

	// Initialize epics
	epicMiddleware.run(rootEpic)

	return store
}