import React, {Component} from "react"
import {Image, StyleSheet} from "react-native"

import assets from "~/assets/assets"

export default class BackgroundMarvelImage extends Component {
		render() {
				return (
					<Image style={homeView.background} width={"100%"} height={"100%"} source={assets.images.MarvelBackground}/>
				)
		}
}

const homeView = StyleSheet.create({
		background: {
				position: "absolute",
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				width: "100%",
				height: "100%"
		}
})