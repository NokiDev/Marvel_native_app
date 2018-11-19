import {marvelAPIActions} from '../actions/marvelApi.actions'

//
const initialState = {
	baseUrl: 'https://gateway.marvel.com//v1/public/',
	apiKeys : {
		private : '',
		public : ''
	},
	comics: {
		array: [],// Fiil with ids 
		status: '',
		offset: 0,
		// Adds up comics object by ids 
	},
	characters: {
		array: [],// Fiil with ids 
		status: '',
		offset: 0,
		// Adds up characters object by ids 
	},
	events: {
		array: [],// Fiil with ids 
		status: '',
		offset: 0,
		// Adds up events object by ids 
	},
	series: {
		array: [],// Fiil with ids 
		status: '',
		offset: 0,
		// Adds up series object by ids 
	}
}


export default (state=initialState, action) => {
	console.log("marvel reducer",action)
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
	default :
		return state
	}
}
