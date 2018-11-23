import {comicsActions} from "~/Redux/actions/marvelApi/comics.actions"

const initialState = {
		array: [], // Fiil with ids,
		isLoading: false,
		offset: 0,
		// Adds up comics object by ids
}

const comicsReducers = (state = initialState, action) => {
		switch (action.type) {
				case comicsActions.FETCH_COMICS:
						return {
								...state,
								isLoading: true
						}
				case comicsActions.FETCH_COMICS_SUCCESS: {
						const idArray = action.payload.map((item) => item.id).filter((id) => state.array.includes(id) === false)
						const dataArray = action.payload.reduce((map, object, index) => {
								if(index === 1) {
										let tmp = map
										map = {}
										map[tmp.id]=tmp
								}
								map[object.id] = object
								return map
						})
						return {
								...state,
								isLoading: false,
								array: [...state.array, ...idArray],
							  ...dataArray,
								offset: state.offset + action.payload.length
						}
				}
				case comicsActions.FETCH_COMICS_FAILURE:
						return {
								...state,
								isLoading: false,
								array: []
						}
				default:
						return state
		}
}


export default comicsReducers