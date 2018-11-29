import React, {Component} from "react"
import {Image, Linking, StyleSheet, TouchableOpacity, View} from "react-native"
import assets from "~/assets/assets"
import PropTypes from "prop-types"

export default class CustomMarvelHeader extends Component {

	openHomePage() {
		if (Linking.canOpenURL(this.props.homePage)) {
			Linking.openURL(this.props.homePage)
		}
	}

	render() {
		return (
			<View style={styles.header}>
				<TouchableOpacity onPress={() => {
					this.openHomePage()
				}}>
					<Image
						source={assets.images.MarvelLogo}
						style={{width: "100%", height: "100%"}}
						resizeMode={"contain"}
					/>
				</TouchableOpacity>
			</View>
		)
	}
}

CustomMarvelHeader.propTypes = {
	homePage: PropTypes.string
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#560505",
		paddingTop: 10,
		paddingBottom: 10
	}
})