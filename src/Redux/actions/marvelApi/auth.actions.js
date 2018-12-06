export const authActions = {
	CONNECT_API_DONE    : "CONNECT_API_DONE",
	CONNECTING_API      : "CONNECTING_API",
	DISCONNECT_API_DONE : "DISCONNECT_API_DONE",
	CONNECT_API         : "CONNECT_API",
	DISCONNECT_API      : "DISCONNECT_API",
	RESUME_CONNECT_API  : "RESUME_CONNECT_API"
}


export const resumeConnectApi = (navigation) => ({
	type    : authActions.RESUME_CONNECT_API,
	payload : {
		navigation : navigation
	}
})

// Registers api keys to use Marvel API
export const connectApi = (private_api_key, public_api_key, navigation) => ({
	type    : authActions.CONNECT_API,
	payload : {
		private    : private_api_key,
		public     : public_api_key,
		navigation : navigation
	}
})

// Registers api keys to use Marvel API
export const connectApiDone = (private_api_key, public_api_key, navigation) => ({
	type    : authActions.CONNECT_API_DONE,
	payload : {
		private    : private_api_key,
		public     : public_api_key,
		navigation : navigation
	}
})

export const disconnectApi = (navigation) => ({
	type    : authActions.DISCONNECT_API,
	payload : {
		private : "",
		public  : "",
		navigation
	}
})

export const disconnectApiDone = (navigation) => ({
	type    : authActions.DISCONNECT_API_DONE,
	payload : {
		private    : "",
		public     : "",
		navigation : navigation
	}
})