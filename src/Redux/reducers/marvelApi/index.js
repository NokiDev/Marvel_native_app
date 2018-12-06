import {combineReducers} from "redux"
import auth from "./auth.reducer"

import characters from "./characters.reducer"
import comics from "./comics.reducer"
import creators from "./creators.reducer"
import events from "./events.reducer"
import series from "./series.reducer"
import stories from "./stories.reducer"


export default combineReducers ({
    characters,
    auth,
	comics,
	events,
	stories,
	creators,
	series
})