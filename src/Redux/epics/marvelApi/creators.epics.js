import {
	creatorActions,
	fetchCreatorByIdFailure,
	fetchCreatorByIdSuccess
} from "~/Redux/actions/marvelApi/creators.actions"
import {ofType} from "redux-observable"
import {catchError, map, mergeMap} from "rxjs/operators"
import {of} from "rxjs"

import {AjaxGetRequestFactory} from "~/Utils/Marvel_API/request_helper"


export const fetchCreatorByIdEpic = (action$, state$) => action$.pipe(
	ofType(creatorActions.FETCH_CREATOR_BY_ID),
	mergeMap(action => {
		if (state$.value.marvel.creators[action.payload.id] === undefined) {
			return AjaxGetRequestFactory(
				`${state$.value.marvel.auth.baseUrl}/creators/${action.payload.id}`,
				state$.value.marvel.auth.apiKeys.private,
				state$.value.marvel.auth.apiKeys.public,
				{}
			).pipe(
				map(ajaxRequest => {
					return fetchCreatorByIdSuccess(ajaxRequest.response.data.results)
				}),
				catchError(error => {
					return of(fetchCreatorByIdFailure(error))
				})
			)
		} else {// No op, we won't fetch the creator since already in the state.
			return of({type: "NO_OP", payload: {}})
		}
	})
)


export default [fetchCreatorByIdEpic]