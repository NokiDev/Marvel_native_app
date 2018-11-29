import {creatorActions} from "~/Redux/actions/marvelApi/creators.actions"

const initialState = {
	array: [], // Fiil with ids,
	isLoading: false,
	offset: 0,
	// Adds up comics object by ids
}

const creatorsReducers = (state = initialState, action = {}) => {
	switch (action.type) {
		case creatorActions.FETCH_CREATOR_BY_ID : {
			return {
				...state,
				loading: true
			}
		}
		case creatorActions.FETCH_CREATOR_BY_ID_SUCCESS: {
			const array = [...state.array, action.payload.creator.id].filter((id) => state.array.includes(id) === false)
			return {
				...state,
				array: array,
				...{[action.payload.creator[0].id]: action.payload.creator[0]},
			}
		}
		case creatorActions.FETCH_CREATOR_BY_ID_FAILURE: {
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

export default creatorsReducers


/**   */