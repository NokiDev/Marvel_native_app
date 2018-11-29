import characters from "./characters.epics"
import auth from "./auth.epics"
import comics from "./comics.epics"
import creators from "./creators.epics"
import series from "./series.epics"
import stories from "./stories.epics"
import events from "./events.epics"

export default[
    ...characters,
    ...auth,
	...comics,
	...events,
	...series,
	...stories,
	...creators
]