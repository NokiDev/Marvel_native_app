export const eventActions = {
	FETCH_EVENT_BY_ID: "FETCH_EVENT_BY_ID",
	FETCH_EVENT_BY_ID_SUCCESS: "FETCH_EVENT_BY_ID_SUCCESS",
	FETCH_EVENT_BY_ID_FAILURE: "FETCH_EVENT_BY_ID_FAILURE",
	FETCH_EVENTS: "FETCH_EVENTS"
}

export const fetchEventById = (id) => ({
	type: eventActions.FETCH_EVENT_BY_ID,
	payload: {
		id: id
	}
})

export const fetchEventByIdSuccess = (event) => ({
	type: eventActions.FETCH_EVENT_BY_ID_SUCCESS,
	payload: {
		event
	}
})

export const fetchEventByIdFailure = (error) => ({
	type: eventActions.FETCH_EVENT_BY_ID_FAILURE,
	payload: {
		error
	}
})


export const fetchEvents = () => ({
	type: eventActions.FETCH_EVENTS,
	payload: {}
})