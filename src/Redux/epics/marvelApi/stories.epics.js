import {ofType} from "redux-observable"
import {of} from "rxjs"
import {catchError, map, mergeMap} from "rxjs/operators"
import {fetchStoryByIdFailure, fetchStoryByIdSuccess, storyActions} from "~/Redux/actions/marvelApi/stories.actions"

import {AjaxGetRequestFactory} from "~/Utils/Marvel_API/request_helper"
import {fetchStoriesOfComicFailure, fetchStoriesOfComicSuccess} from "../../actions/marvelApi/stories.actions"


export const fetchStoryByIdEpic = (action$, state$) => action$.pipe (
	ofType (storyActions.FETCH_STORY_BY_ID),
	mergeMap (action => {
		if (state$.value.marvel.stories[action.payload.id] === undefined) {
			return AjaxGetRequestFactory (
				`${state$.value.marvel.auth.baseUrl}/stories/${action.payload.id}`,
				state$.value.marvel.auth.apiKeys["private"],
				state$.value.marvel.auth.apiKeys["public"],
				{}
			).pipe (
				map (ajaxRequest => {
					return fetchStoryByIdSuccess (ajaxRequest.response.data.results)
				}),
				catchError (error => {
					return of (fetchStoryByIdFailure (error))
				})
			)
		} // No op, we won't fetch the story since already in the state.
		return of ({type : "NO_OP", payload : {}})

	})
)


export const fetchStoriesOfComicEpic = (action$, state$) => action$.pipe (
	ofType (storyActions.FETCH_STORIES_OF_COMIC),
	mergeMap ((action) => {
		const state = state$.value
		return AjaxGetRequestFactory (
			`${state.marvel.auth.baseUrl}/comics/${action.payload.comicID}`,
			state.marvel.auth.apiKeys["private"],
			state.marvel.auth.apiKeys["public"],
			{
				offset  : state.marvel.comics.offset,
				orderBy : "focDate"
			}
		).pipe (
			map (ajaxRequest => {
				return fetchStoriesOfComicSuccess (ajaxRequest.response.data.results)
			}),
			catchError (error => {
				return of (fetchStoriesOfComicFailure (error))
			})
		)
	})
)


export default [fetchStoryByIdEpic]