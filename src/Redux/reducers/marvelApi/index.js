import {combineReducers} from "redux"

import characters from "./characters.reducer"
import auth from "./auth.reducer"
import comics from "./comics.reducer"


export default combineReducers({
    characters,
    auth,
    comics
})