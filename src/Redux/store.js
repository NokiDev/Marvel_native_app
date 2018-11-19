import { applyMiddleware, compose, createStore } from 'redux'
import {rootReducer, rootEpic} from './reducers'
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger'


export const configureStore = (preloadedState) => {
    const middlewares = []
    const epicMiddleware = createEpicMiddleware() 
   // const logger = createLogger({})
    middlewares.push(epicMiddleware);
   // middlewares.push(logger);

    const middlewareEnhancer = applyMiddleware(...middlewares)
    const enhancers = [middlewareEnhancer]
    const composedEnhancers = compose(...enhancers)
    const store = createStore(rootReducer, preloadedState, composedEnhancers)

    epicMiddleware.run(rootEpic);

    return store
}