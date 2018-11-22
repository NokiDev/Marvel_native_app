import {ofType} from "redux-observable"
import {map, mergeMap, catchError} from "rxjs/operators"
import {of} from "rxjs"

import {comicsActions, fetchComicsSuccess, fetchComicsFailure} from '~/Redux/actions/marvelApi/comics.actions'

import { AjaxGetRequestFactory } from '~/Utils/Marvel_API/request_helper'

export const fetchComicsEpic = (action$, state$) => action$.pipe(
	ofType(comicsActions.FETCH_COMICS),
	mergeMap(() => {
		const state = state$.value
		return AjaxGetRequestFactory(
			`${state.marvel.auth.baseUrl}/comics`,
			state.marvel.auth.apiKeys.private,
			state.marvel.auth.apiKeys.public,
			{
				offset: state.marvel.comics.offset
			}
		).pipe(
			map(ajaxRequest => {
				return fetchComicsSuccess(ajaxRequest.response.data.results)
			}),
			catchError(error => {
				console.log(error)
				return of(fetchComicsFailure(error))
			})
		)
	})
)

export default [
    fetchComicsEpic
]