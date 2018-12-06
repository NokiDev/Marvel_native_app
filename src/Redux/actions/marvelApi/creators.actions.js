export const creatorActions = {
	FETCH_CREATOR_BY_ID             : "FETCH_CREATOR_BY_ID",
	FETCH_CREATOR_BY_ID_SUCCESS     : "FETCH_CREATOR_BY_ID_SUCCESS",
	FETCH_CREATOR_BY_ID_FAILURE     : "FETCH_CREATOR_BY_ID_FAILURE",
	FETCH_CREATORS                  : "FETCH_CREATORS",
	FETCH_CREATORS_OF_COMIC         : "FETCH_CREATORS_OF_COMIC",
	FETCH_CREATORS_OF_COMIC_SUCCESS : "FETCH_CREATORS_OF_COMIC_SUCCESS",
	FETCH_CREATORS_OF_COMIC_FAILURE : "FETCH_CREATORS_OF_COMIC_FAILURE"
}

export const fetchCreatorById = (id) => ({
	type    : creatorActions.FETCH_CREATOR_BY_ID,
	payload : {
		id: id
	}
})

export const fetchCreatorByIdSuccess = (creator) => ({
	type    : creatorActions.FETCH_CREATOR_BY_ID_SUCCESS,
	payload : {
		creator
	}
})

export const fetchCreatorByIdFailure = (error) => ({
	type    : creatorActions.FETCH_CREATOR_BY_ID_FAILURE,
	payload : {
		error
	}
})


export const fetchCreators = () => ({
	type    : creatorActions.FETCH_CREATORS,
	payload : {}
})

export const fetchCreatorsOfComic = (comicID) => ({
	type    : creatorActions.FETCH_CREATORS_OF_COMIC,
	payload : comicID
})

export const fetchCreatorsOfComicSuccess = (creators) => ({
	type    : creatorActions.FETCH_CREATORS_OF_COMIC_SUCCESS,
	payload : creators
})

export const fetchCreatorsOfComicFailure = (error) => ({
	type    : creatorActions.FETCH_CREATORS_OF_COMIC_FAILURE,
	payload : error
})