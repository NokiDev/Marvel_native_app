import {combineReducers} from "redux"

import characters from "./characters.reducer"
import auth from "./auth.reducer"
import comics from "./comics.reducer"
import series from "./series.reducer"
import creators from "./creators.reducer"
import stories from "./stories.reducer"
import events from "./events.reducer"


export default combineReducers({
    characters,
    auth,
	comics,
	events,
	stories,
	creators,
	series
})