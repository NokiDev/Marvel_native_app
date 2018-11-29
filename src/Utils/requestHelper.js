export const generateGetUrlWithParams = (url, params) => {
	let paramsExtra = ""
	let counter = 0
	for (let key in params) {
		paramsExtra += (counter === 0) ? "?" : "&"
		paramsExtra += `${key}=${params[key]}`
		counter += 1
	}

	return `${url}${paramsExtra}`
}