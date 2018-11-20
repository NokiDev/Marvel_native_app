export const marvelAPIActions = {
		CONNECT_API_DONE: "CONNECT_API_DONE",
		CONNECTING_API: "CONNECTING_API",
		DISCONNECT_API_DONE: "DISCONNECT_API_DONE",
		FETCH_COMMICS_BY_DATE: "FETCH_COMMICS_BY_DATE",
		CONNECT_API: "CONNECT_API",
		DISCONNECT_API: "DISCONNECT_API",
		RESUME_CONNECT_API: "RESUME_CONNECT_API",
		FETCH_COMICS: "FETCH_COMICS",
		FETCH_COMICS_SUCCESS: "FETCH_COMICS_SUCCESS",
		FETCH_COMICS_FAILURE: "FETCH_COMICS_FAILURE"
}

export const resumeConnectApi = (navigation) => ({
		type: marvelAPIActions.RESUME_CONNECT_API,
		payload: {
				navigation: navigation,
		}
})

// Registers api keys to use Marvel API
export const connectApi = (private_api_key, public_api_key, navigation) => ({
		type: marvelAPIActions.CONNECT_API,
		payload: {
				private: private_api_key,
				public: public_api_key,
				navigation: navigation,
		}
})
// Registers api keys to use Marvel API
export const connectApiDone = (private_api_key, public_api_key, navigation) => ({
		type: marvelAPIActions.CONNECT_API_DONE,
		payload: {
				private: private_api_key,
				public: public_api_key,
				navigation: navigation
		}
})

export const disconnectApi = (navigation) => ({
		type: marvelAPIActions.DISCONNECT_API,
		payload: {
				private: "",
				public: "",
				navigation
		}
})

export const disconnectApiDone = (navigation) => ({
		type: marvelAPIActions.DISCONNECT_API_DONE,
		payload: {
				private: "",
				public: "",
				navigation: navigation
		}
})

export const fetchComics = (keys, url) => ({
		type: marvelAPIActions.FETCH_COMICS,
		payload: {
				keys,
				url
		}
})

export const fetchComicsSuccess = (comics) => ({
		type: marvelAPIActions.FETCH_COMICS_SUCCESS,
		payload: comics
})

export const fetchComicsFailure = (message) => ({
		type: marvelAPIActions.FETCH_COMICS_FAILURE,
		payload: message
})