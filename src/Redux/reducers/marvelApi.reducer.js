import {marvelAPIActions} from "../actions/marvelApi.actions"


//
const initialState = {
		baseUrl: "https://gateway.marvel.com//v1/public/",
		apiKeys: {
				private: "",
				public: ""
		},
		comics: {
				array: [],// Fiil with ids
				isLoading: false,
				offset: 0,
				// Adds up comics object by ids
		},
		characters: {
				array: [],// Fiil with ids
				isLoading: false,
				offset: 0,
				// Adds up characters object by ids
		},
		events: {
				array: [],// Fiil with ids
				isLoading: false,
				offset: 0,
				// Adds up events object by ids
		},
		series: {
				array: [],// Fiil with ids
				isLoading: false,
				offset: 0,
				// Adds up series object by ids
		}
}

const marvelApiReducers = (state = initialState, action) => {
		switch (action.type) {
				case marvelAPIActions.CONNECT_API_DONE :
						return {
								...state,
								apiKeys: action.payload
						}
				case marvelAPIActions.DISCONNECT_API_DONE :
						return {
								...state,
								apiKeys: action.payload
						}
				case marvelAPIActions.FETCH_COMICS:
						return {
								...state,
								loading: true
						}
				case marvelAPIActions.FETCH_COMICS_SUCCESS:
						return {
							...state,
							comics: {
									loading: false,
									array: [...state.comics.array, ...action.payload]
							}
						}
				case marvelAPIActions.FETCH_COMICS_FAILURE:
						return {
								...state,
								loading: false,
								array: []
						}
				default:
						return state
		}
}


export default marvelApiReducers