import React, {Component} from "react"
import {Image, StyleSheet, View} from "react-native"
import assets from "~/assets/assets"

export default class CustomMarvelHeader extends Component {
		
		render() {
				return (
					<View style={styles.header}>
							<Image
								source={assets.images.MarvelLogo}
								style={{width: "100%", height: "100%"}}
								resizeMode={"contain"}
							/>
					</View>
				)
		}
}

const styles = StyleSheet.create({
		header: {
				backgroundColor: "#560505",
				paddingTop: 10,
				paddingBottom: 10
		}
})