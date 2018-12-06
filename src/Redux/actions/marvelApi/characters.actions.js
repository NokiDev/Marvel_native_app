export const characterActions = {
	FETCH_CHARACTER_BY_ID             : "FETCH_CHARACTER_BY_ID",
	FETCH_CHARACTER_BY_ID_SUCCESS     : "FETCH_CHARACTER_BY_ID_SUCCESS",
	FETCH_CHARACTER_BY_ID_FAILURE     : "FETCH_CHARACTER_BY_ID_FAILURE",
	FETCH_CHARACTERS                  : "FETCH_CHARACTERS",
	FETCH_CHARACTERS_OF_COMIC         : "FETCH_CHARACTERS_OF_COMIC",
	FETCH_CHARACTERS_OF_COMIC_SUCCESS : "FETCH_CHARACTERS_OF_COMIC_SUCCESS",
	FETCH_CHARACTERS_OF_COMIC_FAILURE : "FETCH_CHARACTERS_OF_COMIC_FAILURE"
}

export const fetchCharacterById = (id) => ({
	type    : characterActions.FETCH_CHARACTER_BY_ID,
	payload : {
		id: id
	}
})

export const fetchCharacterByIdSuccess = (character) => ({
	type    : characterActions.FETCH_CHARACTER_BY_ID_SUCCESS,
	payload : {
		character
	}
})

export const fetchCharacterByIdFailure = (error) => ({
	type    : characterActions.FETCH_CHARACTER_BY_ID_FAILURE,
	payload : {
		error
	}
})


export const fetchCharacters = () => ({
	type    : characterActions.FETCH_CHARACTERS,
	payload : {}
})


export const fetchCharactersOfComic = (comicID) => ({
	type    : characterActions.FETCH_CHARACTERS_OF_COMIC,
	payload : comicID
})

export const fetchCharactersOfComicSuccess = (characters) => ({
	type    : characterActions.FETCH_CHARACTERS_OF_COMIC_SUCCESS,
	payload : characters
})

export const fetchCharactersOfComicFailure = (error) => ({
	type    : characterActions.FETCH_CHARACTERS_OF_COMIC_FAILURE,
	payload : error
})