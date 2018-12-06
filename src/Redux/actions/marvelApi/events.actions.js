export const eventActions = {
	FETCH_EVENT_BY_ID             : "FETCH_EVENT_BY_ID",
	FETCH_EVENT_BY_ID_SUCCESS     : "FETCH_EVENT_BY_ID_SUCCESS",
	FETCH_EVENT_BY_ID_FAILURE     : "FETCH_EVENT_BY_ID_FAILURE",
	FETCH_EVENTS                  : "FETCH_EVENTS",
	FETCH_EVENTS_OF_COMIC         : "FETCH_EVENTS_OF_COMIC",
	FETCH_EVENTS_OF_COMIC_SUCCESS : "FETCH_EVENTS_OF_COMIC_SUCCESS",
	FETCH_EVENTS_OF_COMIC_FAILURE : "FETCH_EVENTS_OF_COMIC_FAILURE"
}

export const fetchEventById = (id) => ({
	type    : eventActions.FETCH_EVENT_BY_ID,
	payload : {
		id: id
	}
})

export const fetchEventByIdSuccess = (event) => ({
	type    : eventActions.FETCH_EVENT_BY_ID_SUCCESS,
	payload : {
		event
	}
})

export const fetchEventByIdFailure = (error) => ({
	type    : eventActions.FETCH_EVENT_BY_ID_FAILURE,
	payload : {
		error
	}
})


export const fetchEvents = () => ({
	type    : eventActions.FETCH_EVENTS,
	payload : {}
})


export const fetchEventsOfComic = (comicID) => ({
	type    : eventActions.FETCH_EVENTS_OF_COMIC,
	payload : comicID
})

export const fetchEventsOfComicSuccess = (events) => ({
	type    : eventActions.FETCH_EVENTS_OF_COMIC_SUCCESS,
	payload : events
})

export const fetchEventsOfComicFailure = (error) => ({
	type    : eventActions.FETCH_EVENTS_OF_COMIC_FAILURE,
	payload : error
})