export default class ImageHelper {
	/*
	Enum Object regrouping differents size of image available for Marvel API See https://developer.marvel.com/documentation/images

	portrait_small 	        50x75px
	portrait_medium 	    100x150px
	portrait_xlarge 	    150x225px
	portrait_fantastic 	    168x252px
	portrait_uncanny 	    300x450px
	portrait_incredible 	216x324px

	standard_small 	        65x45px
	standard_medium 	    100x100px
	standard_large 	        140x140px
	standard_xlarge     	200x200px
	standard_fantastic 	    250x250px
	standard_amazing 	    180x180px

	landscape_small 	    120x90px
	landscape_medium     	175x130px
	landscape_large 	    190x140px
	landscape_xlarge 	    270x200px
	landscape_amazing 	    250x156px
	landscape_incredible 	464x261px

	full-size image 	no variant descriptor
	* */

	const
	imageFormat = Object.freeze({
		portrait_small: Symbol("portrait_small"),
		portrait_medium: Symbol("portrait_medium"),
		portrait_xlarge: Symbol("portrait_xlarge"),
		portrait_fantastic: Symbol("portrait_fantastic"),
		portrait_uncanny: Symbol("portrait_uncanny"),
		portrait_incredible: Symbol("portrait_incredible"),

		standard_small: Symbol("standard_small"),
		standard_medium: Symbol("standard_medium"),
		standard_large: Symbol("standard_large"),
		standard_xlarge: Symbol("standard_xlarge"),
		standard_fantastic: Symbol("standard_fantastic"),
		standard_amazing: Symbol("standard_amazing"),

		landscape_small: Symbol("landscape_small"),
		landscape_medium: Symbol("landscape_medium"),
		landscape_large: Symbol("landscape_large"),
		landscape_xlarge: Symbol("landscape_xlarge"),
		landscape_amazing: Symbol("landscape_amazing"),
		landscape_incredible: Symbol("landscape_incredible"),

		full_size: Symbol("full_size"),
	})

	// Construct image source path for Marvel API, See https://developer.marvel.com/documentation/images
	static build_image_link(path, extension, imageFormat) {
		return `${path}/${imageFormat}.${extension}`
	}

}