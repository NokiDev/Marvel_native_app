
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

export const imageFormat = Object.freeze({
		portrait_small: ("portrait_small"),
		portrait_medium: ("portrait_medium"),
		portrait_xlarge: ("portrait_xlarge"),
		portrait_fantastic: ("portrait_fantastic"),
		portrait_uncanny: ("portrait_uncanny"),
		portrait_incredible: ("portrait_incredible"),

		standard_small: ("standard_small"),
		standard_medium: ("standard_medium"),
		standard_large: ("standard_large"),
		standard_xlarge: ("standard_xlarge"),
		standard_fantastic: ("standard_fantastic"),
		standard_amazing: ("standard_amazing"),

		landscape_small: ("landscape_small"),
		landscape_medium: ("landscape_medium"),
		landscape_large: ("landscape_large"),
		landscape_xlarge: ("landscape_xlarge"),
		landscape_amazing: ("landscape_amazing"),
		landscape_incredible: ("landscape_incredible"),

		full_size: ("full_size"),
})

// Construct image source path for Marvel API, See https://developer.marvel.com/documentation/images
export const build_image_link = (path, extension, imageFormat) => {
			return `${path}/${imageFormat}.${extension}`
}