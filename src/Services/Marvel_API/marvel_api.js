import axios from "axios"
import reduxStore from "~/Redux/store"
import md5 from "md5"

// Represent Marvel API abstraction for https://developer.marvel.com
class Marvel_API {

	unsubscribe
	// Marvel API public key
	base_url = "https://gateway.marvel.com//v1/public/characters"
	private_api_key = ""
	public_api_key = ""

	constructor() {
		this.unsubscribe = reduxStore.subscribe(() => {
			console.log(reduxStore.getState())
			// TODO update api_key.
		})
	}

	destructor() {
		this.unsubscribe()
	}

	/*
	name string
	nameStartWith string
	modifiedSince date
	comics  list of id
	series  list of id
	event list of id
	*/
	getCharacters(offset = 0, name = "", nameStartWith = "", modifiedSince = undefined, comics = [], series = [], events = []) {
		const TimeStamp = new Date().getMilliseconds()
		const hash = md5(`${TimeStamp}${this.private_api_key}${this.public_api_key}`)

		axios({
			method: "GET",
			url: this.base_url,
			params: {
				ts: TimeStamp,
				apikey: this.public_api_key,
				hash: hash,
				offset: offset
			},
			Headers: {
				Accept: "*/*"
			}
		})
			.then(res => {
				console.log("redux", res)
				/*reduxStore.dispatch(
			allCharactersDisplay({
			  list: res.data.data.results,
			  offset: res.data.data.offset
			})
		  )*/
			})
			.catch(err => console.error(err))
	}
}

let MarvelApi = new Marvel_API()

export default MarvelApi
