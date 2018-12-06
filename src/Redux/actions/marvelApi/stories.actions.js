export const storyActions = {
	FETCH_STORY_BY_ID              : "FETCH_STORY_BY_ID",
	FETCH_STORY_BY_ID_SUCCESS      : "FETCH_STORY_BY_ID_SUCCESS",
	FETCH_STORY_BY_ID_FAILURE      : "FETCH_STORY_BY_ID_FAILURE",
	FETCH_STORIES                  : "FETCH_STORIES",
	FETCH_STORIES_OF_COMIC         : "FETCH_STORIES_OF_COMIC",
	FETCH_STORIES_OF_COMIC_SUCCESS : "FETCH_STORIES_OF_COMIC_SUCCESS",
	FETCH_STORIES_OF_COMIC_FAILURE : "FETCH_STORIES_OF_COMIC_FAILURE"
}

export const fetchStoryById = (id) => ({
	type    : storyActions.FETCH_STORY_BY_ID,
	payload : {
		id: id
	}
})

export const fetchStoryByIdSuccess = (story) => ({
	type    : storyActions.FETCH_STORY_BY_ID_SUCCESS,
	payload : {
		story
	}
})

export const fetchStoryByIdFailure = (error) => ({
	type    : storyActions.FETCH_STORY_BY_ID_FAILURE,
	payload : {
		error
	}
})


export const fetchStories = () => ({
	type    : storyActions.FETCH_STORIES,
	payload : {}
})


export const fetchStoriesOfComic = (comicID) => ({
	type    : storyActions.FETCH_STORIES_OF_COMIC,
	payload : comicID
})

export const fetchStoriesOfComicSuccess = (stories) => ({
	type    : storyActions.FETCH_STORIES_OF_COMIC_SUCCESS,
	payload : stories
})

export const fetchStoriesOfComicFailure = (error) => ({
	type    : storyActions.FETCH_STORIES_OF_COMIC_FAILURE,
	payload : error
})