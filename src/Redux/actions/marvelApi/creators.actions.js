export const creatorActions = {
	FETCH_CREATOR_BY_ID: "FETCH_CREATOR_BY_ID",
	FETCH_CREATOR_BY_ID_SUCCESS: "FETCH_CREATOR_BY_ID_SUCCESS",
	FETCH_CREATOR_BY_ID_FAILURE: "FETCH_CREATOR_BY_ID_FAILURE",
	FETCH_CREATORS: "FETCH_CREATORS"
}

export const fetchCreatorById = (id) => ({
	type: creatorActions.FETCH_CREATOR_BY_ID,
	payload: {
		id: id
	}
})

export const fetchCreatorByIdSuccess = (creator) => ({
	type: creatorActions.FETCH_CREATOR_BY_ID_SUCCESS,
	payload: {
		creator
	}
})

export const fetchCreatorByIdFailure = (error) => ({
	type: creatorActions.FETCH_CREATOR_BY_ID_FAILURE,
	payload: {
		error
	}
})


export const fetchCreators = () => ({
	type: creatorActions.FETCH_CREATORS,
	payload: {}
})