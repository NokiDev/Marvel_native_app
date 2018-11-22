import {ajax} from "rxjs/ajax"
import md5 from "md5"
import {generateGetUrlWithParams} from '~/Utils/requestHelper'

export const AjaxGetRequestFactory = (url, privateKey, publicKey, additionalParams) => {
	const TimeStamp = new Date().getMilliseconds()
	const hash = md5(`${TimeStamp}${privateKey}${publicKey}`)

	return ajax({
		method: 'GET',
		url:generateGetUrlWithParams(url, {
			ts:TimeStamp,
			apikey: publicKey,
			hash: hash,
			...additionalParams
		}),
		headers: {
			Accept: '*/*'
		}
	})
}