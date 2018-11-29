import {seriesActions} from "~/Redux/actions/marvelApi/series.actions"

const initialState = {
	array: [], // Fiil with ids,
	isLoading: false,
	offset: 0,
	// Adds up comics object by ids
}

const seriesReducers = (state = initialState, action = {}) => {
	switch (action.type) {
		case seriesActions.FETCH_SERIES_BY_ID : {
			return {
				...state,
				loading: true
			}
		}
		case seriesActions.FETCH_SERIES_BY_ID_SUCCESS: {
			const array = [...state.array, action.payload.series.id].filter((id) => state.array.includes(id) === false)
			return {
				...state,
				array: array,
				...{[action.payload.series[0].id]: action.payload.series[0]},
			}
		}
		case seriesActions.FETCH_SERIES_BY_ID_FAILURE: {
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

export default seriesReducers


/**   */