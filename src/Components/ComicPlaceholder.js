import React, {Component} from "react"
import {Image, StyleSheet, View} from "react-native"
import PropTypes from "prop-types"

import assets from "~/assets/assets"

export default class ComicPlaceholder extends Component {
		static propTypes = {
				width: PropTypes.string || PropTypes.number,
				height: PropTypes.string || PropTypes.number
		}
		
		constructor(props) {
				super(props)
		}
		
		render() {
				let {width, height} = this.props
				return (
					<View style={{width: width, height: height, ...styles.placeholder}}>
							<Image style={{width: width}} source={assets.images.MarvelLogo} resizeMode={"contain"}/>
					</View>
				)
		}
}

const styles = StyleSheet.create({
		placeholder: {
				marginTop: 5,
				marginBottom: 5,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "rgba(193,66,66, 0.7)"
		}
})