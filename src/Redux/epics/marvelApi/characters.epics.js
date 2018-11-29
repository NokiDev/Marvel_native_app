import {
	characterActions,
	fetchCharacterByIdFailure,
	fetchCharacterByIdSuccess
} from "~/Redux/actions/marvelApi/characters.actions"
import {ofType} from "redux-observable"
import {catchError, map, mergeMap} from "rxjs/operators"
import {of} from "rxjs"

import {AjaxGetRequestFactory} from "~/Utils/Marvel_API/request_helper"


export const fetchCharacterByIdEpic = (action$, state$) => action$.pipe(
	ofType(characterActions.FETCH_CHARACTER_BY_ID),
	mergeMap(action => {
		if (state$.value.marvel.characters[action.payload.id] === undefined) {
			return AjaxGetRequestFactory(
				`${state$.value.marvel.auth.baseUrl}/characters/${action.payload.id}`,
				state$.value.marvel.auth.apiKeys.private,
				state$.value.marvel.auth.apiKeys.public,
				{}
			).pipe(
				map(ajaxRequest => {
					return fetchCharacterByIdSuccess(ajaxRequest.response.data.results)
				}),
				catchError(error => {
					return of(fetchCharacterByIdFailure(error))
				})
			)
		} else {// No op, we won't fetch the character since already in the state.
			return of({type: "NO_OP", payload: {}})
		}
	})
)


export default [fetchCharacterByIdEpic]