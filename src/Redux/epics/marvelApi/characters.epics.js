import {ofType} from "redux-observable"
import {of} from "rxjs"
import {catchError, map, mergeMap} from "rxjs/operators"
import {
	characterActions,
	fetchCharacterByIdFailure,
	fetchCharacterByIdSuccess
} from "~/Redux/actions/marvelApi/characters.actions"

import {AjaxGetRequestFactory} from "~/Utils/Marvel_API/request_helper"
import {fetchCharactersOfComicSuccess} from "../../actions/marvelApi/characters.actions"
import {fetchCreatorsOfComicFailure} from "../../actions/marvelApi/creators.actions"


export const fetchCharacterByIdEpic = (action$, state$) => action$.pipe (
	ofType (characterActions.FETCH_CHARACTER_BY_ID),
	mergeMap (action => {
		if (state$.value.marvel.characters[action.payload.id] === undefined) {
			return AjaxGetRequestFactory (
				`${state$.value.marvel.auth.baseUrl}/characters/${action.payload.id}`,
				state$.value.marvel.auth.apiKeys["private"],
				state$.value.marvel.auth.apiKeys["public"],
				{}
			).pipe (
				map (ajaxRequest => {
					return fetchCharacterByIdSuccess (ajaxRequest.response.data.results)
				}),
				catchError (error => {
					return of (fetchCharacterByIdFailure (error))
				})
			)
		} // No op, we won't fetch the character since already in the state.
		return of ({type : "NO_OP", payload : {}})

	})
)

export const fetchCharactersOfComicEpic = (action$, state$) => action$.pipe (
	ofType (characterActions.FETCH_CHARACTERS_OF_COMIC),
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
				return fetchCharactersOfComicSuccess (ajaxRequest.response.data.results)
			}),
			catchError (error => {
				return of (fetchCreatorsOfComicFailure (error))
			})
		)
	})
)


export default [fetchCharacterByIdEpic]