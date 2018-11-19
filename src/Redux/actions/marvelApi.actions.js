import { ofType } from 'redux-observable'
import { mergeMap, map } from 'rxjs/operators';

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
    RESUME_CONNECT_API : 'RESUME_CONNECT_API',
}

// Registers api keys to use Marvel API
export const connectApi = (private_api_key, public_api_key, navigation) => ({
    type: _marvelAPIActions.CONNECT_API,
    payload : {
        private: private_api_key,
        public: public_api_key,
        navigation : navigation,
    }
})

export const disconnectApi = (navigation) => ({
    type: _marvelAPIActions.DISCONNECT_API,
    payload : {
        private: '',
        public: '',
        navigation
    }
})

export const resumeConnectApi = (navigation) => ({
    type: _marvelAPIActions.RESUME_CONNECT_API,
    payload : {
        navigation : navigation,
    }
})

// Registers api keys to use Marvel API
const connectApiDone = (private_api_key, public_api_key, navigation) => ({
    type: marvelAPIActions.CONNECT_API_DONE,
    payload : {
        private: private_api_key,
        public: public_api_key,
        navigation: navigation
    }
})
const disconnectApiDone = (navigation) => ({
    type: marvelAPIActions.DISCONNECT_API_DONE,
    payload : {
        private :'',
        public : '',
        navigation: navigation
    }
})

// Store api keys in local storage.
export const connectApiEpic = (action$, state$) => action$.pipe(
    ofType(_marvelAPIActions.CONNECT_API),
    map(action => {
        console.log(action)
        AsyncStorage.setItem('public_key', action.payload.public)
        AsyncStorage.setItem('private_key', action.payload.private)

        return connectApiDone(action.payload.private, action.payload.public, action.payload.navigation)
    })
)

// Remove api keys from store.
export const disconnectApiEpic = (action$, state$) => action$.pipe(
    ofType(_marvelAPIActions.DISCONNECT_API),
    map(action => {
        AsyncStorage.removeItem('public_key')
        AsyncStorage.removeItem('private_key')

        return disconnectApiDone(action.payload.navigation)
    })
)

// Remove api keys from store.
export const resumeConnectApiEpic = (action$, state$) => action$.pipe(
    ofType(_marvelAPIActions.RESUME_CONNECT_API),
    map(action => {
        let pub = AsyncStorage.getItem('public_key')
        let pri = AsyncStorage.getItem('private_key')
        console.log(pub, pri)
        if(pub && pri) {
            return connectApiDone(pri, pub, action.payload.navigation)
        }
        else {
            return disconnectApiDone(action.payload.navigation)
        }
    })
)