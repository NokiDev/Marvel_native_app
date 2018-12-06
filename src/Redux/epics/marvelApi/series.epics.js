import {ofType} from "redux-observable"
import {of} from "rxjs"
import {catchError, map, mergeMap} from "rxjs/operators"
import {fetchSeriesByIdFailure, fetchSeriesByIdSuccess, seriesActions} from "~/Redux/actions/marvelApi/series.actions"

import {AjaxGetRequestFactory} from "~/Utils/Marvel_API/request_helper"


export const fetchSeriesByIdEpic = (action$, state$) => action$.pipe (
	ofType (seriesActions.FETCH_SERIES_BY_ID),
	mergeMap (action => {
		if (state$.value.marvel.series[action.payload.id] === undefined) {
			return AjaxGetRequestFactory (
				`${state$.value.marvel.auth.baseUrl}/series/${action.payload.id}`,
				state$.value.marvel.auth.apiKeys["private"],
				state$.value.marvel.auth.apiKeys["public"],
				{}
			).pipe (
				map (ajaxRequest => {
					return fetchSeriesByIdSuccess (ajaxRequest.response.data.results)
				}),
				catchError (error => {
					return of (fetchSeriesByIdFailure (error))
				})
			)
		} // No op, we won't fetch the series since already in the state.
		return of ({type : "NO_OP", payload : {}})

	})
)


export default [fetchSeriesByIdEpic]