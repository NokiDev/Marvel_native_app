import { createStore } from 'redux'
import app from './reducers'

middlewares = []
/// Adds up middlewares


export default createStore(app, ...middlewares)
