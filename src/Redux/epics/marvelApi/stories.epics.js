import {fetchStoryByIdFailure, fetchStoryByIdSuccess, storyActions} from "~/Redux/actions/marvelApi/stories.actions"
import {ofType} from "redux-observable"
import {catchError, map, mergeMap} from "rxjs/operators"
import {of} from "rxjs"

import {AjaxGetRequestFactory} from "~/Utils/Marvel_API/request_helper"


export const fetchStoryByIdEpic = (action$, state$) => action$.pipe(
	ofType(storyActions.FETCH_STORY_BY_ID),
	mergeMap(action => {
		if (state$.value.marvel.stories[action.payload.id] === undefined) {
			return AjaxGetRequestFactory(
				`${state$.value.marvel.auth.baseUrl}/stories/${action.payload.id}`,
				state$.value.marvel.auth.apiKeys.private,
				state$.value.marvel.auth.apiKeys.public,
				{}
			).pipe(
				map(ajaxRequest => {
					return fetchStoryByIdSuccess(ajaxRequest.response.data.results)
				}),
				catchError(error => {
					return of(fetchStoryByIdFailure(error))
				})
			)
		} else {// No op, we won't fetch the story since already in the state.
			return of({type: "NO_OP", payload: {}})
		}
	})
)


export default [fetchStoryByIdEpic]