import { ofType } from 'redux-observable'
import { mergeMap, map } from 'rxjs';

// STORAGE.
import { AsyncStorage } from 'react-native'; 

// Exported public actions .
export const marvelAPIActions = {
    CONNECT_API_DONE : 'CONNECT_API_DONE',
    CONNECTING_API: 'CONNECTING_API',
    DISCONNECT_API_DONE: 'DISCONNECT_API_DONE',
    FETCH_COMMICS_BY_DATE: 'FETCH_COMMICS_BY_DATE'
}

// PRivate actions used in this file locally for epics.
const _marvelAPIActions = {
    CONNECT_API: 'CONNECT_API',
    DISCONNECT_API: 'DISCONNECT_API',
}

// Registers api keys to use Marvel API
export const connectApi = (private_api_key, public_api_key) => ({
    type: _marvelAPIActions.CONNECT_API,
    payload : {
        private: private_api_key,
        public: public_api_key
    }
})

export const disconnectApi = () => ({
    type: _marvelAPIActions.DISCONNECT_API,
    payload : {
        private: '',
        public: ''
    }
})

// Registers api keys to use Marvel API
const connectApiDone = (private_api_key, public_api_key) => ({
    type: marvelAPIActions.CONNECT_API_DONE,
    payload : {
        private: private_api_key,
        public: public_api_key
    }
})
const disconnectApiDone = () => ({
    type: marvelAPIActions.DISCONNECT_API_DONE,
    payload : {
        private :'',
        public : ''
    }
})

// Store api keys in local storage.
export const connectApiEpic = (action$, state$) => action$.pipe(
    ofType(_marvelAPIActions.CONNECT_API),
    map(action => {
        console.log(action)
        AsyncStorage.setItem('public_key', action.payload.public)
        AsyncStorage.setItem('pricate_key', action.payload.private)

        return connectApiDone(action.payload.private, action.payload.public)
    })
)

// Remove api keys from store.
export const disconnectApiEpic = (action$, state$) => action$.pipe(
    ofType(_marvelAPIActions.DISCONNECT_API),
    mergeMap(action => {
        AsyncStorage.removeItem('public_key')
        AsyncStorage.removeItem('pricate_key')

        return disconnectApiDone()
    })
)
