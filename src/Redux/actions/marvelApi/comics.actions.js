export const comicsActions = {
	FETCH_COMICS: "FETCH_COMICS",
	FETCH_COMMICS_BY_DATE: "FETCH_COMMICS_BY_DATE",
	FETCH_COMICS_SUCCESS: "FETCH_COMICS_SUCCESS",
	FETCH_COMICS_FAILURE: "FETCH_COMICS_FAILURE"
}

export const fetchComics = () => ({
	type: comicsActions.FETCH_COMICS
})

export const fetchComicsSuccess = (comics) => ({
	type: comicsActions.FETCH_COMICS_SUCCESS,
	payload: comics
})

export const fetchComicsFailure = (error) => ({
	type: comicsActions.FETCH_COMICS_FAILURE,
	payload: error
})