import {combineEpics} from "redux-observable"
import marvel from "./marvelApi"

export const rootEpic = combineEpics(
	...marvel
)