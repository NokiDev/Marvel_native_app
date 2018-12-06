import {ofType} from "redux-observable"
import {of} from "rxjs"
import {catchError, map, mergeMap} from "rxjs/operators"
import {eventActions, fetchEventByIdFailure, fetchEventByIdSuccess} from "~/Redux/actions/marvelApi/events.actions"

import {AjaxGetRequestFactory} from "~/Utils/Marvel_API/request_helper"
import {fetchEventsOfComicFailure, fetchEventsOfComicSuccess} from "../../actions/marvelApi/events.actions"


export const fetchEventByIdEpic = (action$, state$) => action$.pipe (
	ofType (eventActions.FETCH_EVENT_BY_ID),
	mergeMap (action => {
		if (state$.value.marvel.events[action.payload.id] === undefined) {
			return AjaxGetRequestFactory (
				`${state$.value.marvel.auth.baseUrl}/events/${action.payload.id}`,
				state$.value.marvel.auth.apiKeys["private"],
				state$.value.marvel.auth.apiKeys["public"],
				{}
			).pipe (
				map (ajaxRequest => {
					return fetchEventByIdSuccess (ajaxRequest.response.data.results)
				}),
				catchError (error => {
					return of (fetchEventByIdFailure (error))
				})
			)
		} // No op, we won't fetch the event since already in the state.
		return of ({type : "NO_OP", payload : {}})

	})
)

export const fetchEventsOfComicEpic = (action$, state$) => action$.pipe (
	ofType (eventActions.FETCH_EVENTS_OF_COMIC),
	mergeMap ((action) => {
		const state = state$.value
		return AjaxGetRequestFactory (
			`${state.marvel.auth.baseUrl}/comics/${action.payload.comicID}/`,
			state.marvel.auth.apiKeys["private"],
			state.marvel.auth.apiKeys["public"],
			{
				offset : state.marvel.comics.offset
			}
		).pipe (
			map (ajaxRequest => {
				return fetchEventsOfComicSuccess (ajaxRequest.response.data.results)
			}),
			catchError (error => {
				return of (fetchEventsOfComicFailure (error))
			})
		)
	})
)

export default [fetchEventByIdEpic]