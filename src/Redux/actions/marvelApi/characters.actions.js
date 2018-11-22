export const characterActions = { 
    FETCH_CHARACTER_BY_ID: 'FETCH_CHARACTER_BY_ID',
    FETCH_CHARACTER_BY_ID_SUCCESS: 'FETCH_CHARACTER_BY_ID_SUCCESS',
    FETCH_CHARACTER_BY_ID_FAILURE: 'FETCH_CHARACTER_BY_ID_FAILURE',
    FETCH_CHARACTERS : 'FETCH_CHARACTERS'
}

export const fetchCharacterById = (id) => ({
    type: characterActions.FETCH_CHARACTER_BY_ID,
    payload: {
        id : id
    }
})

export const fetchCharacterByIdSuccess = (character) => ({
    type: characterActions.FETCH_CHARACTER_BY_ID_SUCCESS,
    payload: {
        character
    }
})

export const fetchCharacterByIdFailure= (error) => ({
    type: characterActions.FETCH_CHARACTER_BY_ID_FAILURE,
    payload: {
        error
    }
})


export const fetchCharacters = () => ({
    type: characterActions.FETCH_CHARACTERS,
    payload: {}
})