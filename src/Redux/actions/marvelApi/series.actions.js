export const seriesActions = {
	FETCH_SERIES_BY_ID: "FETCH_SERIES_BY_ID",
	FETCH_SERIES_BY_ID_SUCCESS: "FETCH_SERIES_BY_ID_SUCCESS",
	FETCH_SERIES_BY_ID_FAILURE: "FETCH_SERIES_BY_ID_FAILURE",
	FETCH_SERIES: "FETCH_SERIES"
}

export const fetchSeriesById = (id) => ({
	type: seriesActions.FETCH_SERIES_BY_ID,
	payload: {
		id: id
	}
})

export const fetchSeriesByIdSuccess = (series) => ({
	type: seriesActions.FETCH_SERIES_BY_ID_SUCCESS,
	payload: {
		series
	}
})

export const fetchSeriesByIdFailure = (error) => ({
	type: seriesActions.FETCH_SERIES_BY_ID_FAILURE,
	payload: {
		error
	}
})


export const fetchSeries = () => ({
	type: seriesActions.FETCH_SERIES,
	payload: {}
})