import {characterActions} from "~/Redux/actions/marvelApi/characters.actions"

const initialState = {
		array: [], // Fiil with ids,
		isLoading: false,
		offset: 0,
		// Adds up comics object by ids
}

const charactersReducers = (state = initialState, action = {}) => {
		switch (action.type) {
				case characterActions.FETCH_CHARACTER_BY_ID : {
						return {
								...state,
								loading: true
						}
				}
				case characterActions.FETCH_CHARACTER_BY_ID_SUCCESS: {
						const array = [...state.array, action.payload.character[0].id].filter((id) => state.array.includes(id) === false)
						return {
								...state,
								array: array,
								...{[action.payload.character[0].id]: action.payload.character[0]},
						}
				}
				case characterActions.FETCH_CHARACTER_BY_ID_FAILURE: {
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

export default charactersReducers


/**   */