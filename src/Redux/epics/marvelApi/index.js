import characters from "./characters.epics"
import auth from "./auth.epics"
import comics from "./comics.epics"

export default[
    ...characters,
    ...auth,
    ...comics
]