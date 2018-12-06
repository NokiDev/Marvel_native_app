import {storyActions} from "~/Redux/actions/marvelApi/stories.actions"

const initialState = {
	array     : [], // Fiil with ids,
	isLoading : false,
	offset    : 0

	// Adds up comics object by ids
}

const storiesReducers = (state = initialState, action = {}) => {
	switch (action.type) {
		case storyActions.FETCH_STORY_BY_ID: {
			return {
				...state,
				loading: true
			}
		}
		case storyActions.FETCH_STORY_BY_ID_SUCCESS: {
			const array = [...state.array, action.payload.story.id].filter ((id) => state.array.includes (id) === false)
			return {
				...state,
				array: array,
				...{[action.payload.story[0].id] : action.payload.story[0]}
			}
		}
		case storyActions.FETCH_STORY_BY_ID_FAILURE: {
			return {
				...state,
				loading : false,
				array   : []
			}
		}
		default: {
			return state
		}
	}
}

export default storiesReducers


/**   */