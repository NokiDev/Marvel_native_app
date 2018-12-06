import {ofType} from "redux-observable"
import {of} from "rxjs"
import {catchError, map, mergeMap} from "rxjs/operators"
import {
	creatorActions,
	fetchCreatorByIdFailure,
	fetchCreatorByIdSuccess
} from "~/Redux/actions/marvelApi/creators.actions"

import {AjaxGetRequestFactory} from "~/Utils/Marvel_API/request_helper"
import {fetchCreatorsOfComicFailure, fetchCreatorsOfComicSuccess} from "../../actions/marvelApi/creators.actions"


export const fetchCreatorByIdEpic = (action$, state$) => action$.pipe (
	ofType (creatorActions.FETCH_CREATOR_BY_ID),
	mergeMap (action => {
		if (state$.value.marvel.creators[action.payload.id] === undefined) {
			return AjaxGetRequestFactory (
				`${state$.value.marvel.auth.baseUrl}/creators/${action.payload.id}`,
				state$.value.marvel.auth.apiKeys["private"],
				state$.value.marvel.auth.apiKeys["public"],
				{}
			).pipe (
				map (ajaxRequest => {
					return fetchCreatorByIdSuccess (ajaxRequest.response.data.results)
				}),
				catchError (error => {
					return of (fetchCreatorByIdFailure (error))
				})
			)
		}

		// No op, we won't fetch the creator since already in the state.
		return of ({type : "NO_OP", payload : {}})

	})
)

export const fetchCreatorsOfComicEpic = (action$, state$) => action$.pipe (
	ofType (creatorActions.FETCH_CREATORS_OF_COMIC),
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
				return fetchCreatorsOfComicSuccess (ajaxRequest.response.data.results)
			}),
			catchError (error => {
				return of (fetchCreatorsOfComicFailure (error))
			})
		)
	})
)

export default [fetchCreatorByIdEpic]