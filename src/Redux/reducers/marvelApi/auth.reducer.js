import {
    authActions
} from "~/Redux/actions/marvelApi/auth.actions"


//
const initialState = {
    baseUrl : "https://gateway.marvel.com//v1/public/",
    apiKeys: {
        private: "",
        public: ""
    }
}

const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case authActions.CONNECT_API_DONE :
            return {
                ...state,
                apiKeys: action.payload
            }
        case authActions.DISCONNECT_API_DONE :
            return {
                ...state,
                apiKeys: action.payload
            }
        default:
            return state
    }
}


export default authReducers