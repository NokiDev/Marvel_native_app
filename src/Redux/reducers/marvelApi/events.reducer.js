import {eventActions} from "~/Redux/actions/marvelApi/events.actions"

const initialState = {
	array: [], // Fiil with ids,
	isLoading: false,
	offset: 0,
	// Adds up comics object by ids
}

const eventsReducers = (state = initialState, action = {}) => {
	switch (action.type) {
		case eventActions.FETCH_EVENT_BY_ID : {
			return {
				...state,
				loading: true
			}
		}
		case eventActions.FETCH_EVENT_BY_ID_SUCCESS: {
			const array = [...state.array, action.payload.event.id].filter((id) => state.array.includes(id) === false)
			return {
				...state,
				array: array,
				...{[action.payload.event[0].id]: action.payload.event[0]},
			}
		}
		case eventActions.FETCH_EVENT_BY_ID_FAILURE: {
			return {
				...state,
				loading: false,
				array: []
			}
		}
		default: {
			return state
		}
	}
}

export default eventsReducers


/**   */