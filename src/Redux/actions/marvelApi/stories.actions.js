export const storyActions = {
	FETCH_STORY_BY_ID: "FETCH_STORY_BY_ID",
	FETCH_STORY_BY_ID_SUCCESS: "FETCH_STORY_BY_ID_SUCCESS",
	FETCH_STORY_BY_ID_FAILURE: "FETCH_STORY_BY_ID_FAILURE",
	FETCH_STORIES: "FETCH_STORIES"
}

export const fetchStoryById = (id) => ({
	type: storyActions.FETCH_STORY_BY_ID,
	payload: {
		id: id
	}
})

export const fetchStoryByIdSuccess = (story) => ({
	type: storyActions.FETCH_STORY_BY_ID_SUCCESS,
	payload: {
		story
	}
})

export const fetchStoryByIdFailure = (error) => ({
	type: storyActions.FETCH_STORY_BY_ID_FAILURE,
	payload: {
		error
	}
})


export const fetchStories = () => ({
	type: storyActions.FETCH_STORIES,
	payload: {}
})