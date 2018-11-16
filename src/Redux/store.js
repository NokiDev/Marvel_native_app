import { createStore } from "redux"
import app from "./reducers"

let middlewares = []
/// Adds up middlewares


export default createStore(app, ...middlewares)
