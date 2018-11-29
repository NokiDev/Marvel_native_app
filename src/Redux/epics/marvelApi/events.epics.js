import {eventActions, fetchEventByIdFailure, fetchEventByIdSuccess} from "~/Redux/actions/marvelApi/events.actions"
import {ofType} from "redux-observable"
import {catchError, map, mergeMap} from "rxjs/operators"
import {of} from "rxjs"

import {AjaxGetRequestFactory} from "~/Utils/Marvel_API/request_helper"


export const fetchEventByIdEpic = (action$, state$) => action$.pipe(
	ofType(eventActions.FETCH_EVENT_BY_ID),
	mergeMap(action => {
		if (state$.value.marvel.events[action.payload.id] === undefined) {
			return AjaxGetRequestFactory(
				`${state$.value.marvel.auth.baseUrl}/events/${action.payload.id}`,
				state$.value.marvel.auth.apiKeys.private,
				state$.value.marvel.auth.apiKeys.public,
				{}
			).pipe(
				map(ajaxRequest => {
					return fetchEventByIdSuccess(ajaxRequest.response.data.results)
				}),
				catchError(error => {
					return of(fetchEventByIdFailure(error))
				})
			)
		} else {// No op, we won't fetch the event since already in the state.
			return of({type: "NO_OP", payload: {}})
		}
	})
)


export default [fetchEventByIdEpic]