export const generateGetUrlWithParams = (url, params) => {
	let paramsExtra = ""
	let counter = 0
	for (let key in params) {
		paramsExtra = paramsExtra + ((counter === 0) ? "?" : "&")
		paramsExtra = `${paramsExtra}${key}=${params[key]}`
		counter = counter + 1
	}

	return `${url}${paramsExtra}`
}