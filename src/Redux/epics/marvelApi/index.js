import characters from "./characters.epics"
import auth from "./auth.epics"
import comics from "./comics.epics"

import { combineEpics } from "redux-observable"

export default[
    ...characters,
    ...auth,
    ...comics
]