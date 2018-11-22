import {comicsActions} from "~/Redux/actions/marvelApi/comics.actions"


//
const initialState = {
	array: [],// Fiil with ids
	isLoading: false,
	offset: 0,
	// Adds up comics object by ids
}

const comicsReducers = (state = initialState, action) => {
	switch (action.type) {
		case comicsActions.FETCH_COMICS:
			return {
				...state,
				loading: true
			}
		case comicsActions.FETCH_COMICS_SUCCESS:
			return {
				...state,
				loading: false,
				array: [...state.array, ...action.payload],
				offset: state.offset + action.payload.length
			}
		case comicsActions.FETCH_COMICS_FAILURE:
			return {
				...state,
				loading: false,
				array: []
			}
		default:
			return state
	}
}


export default comicsReducers