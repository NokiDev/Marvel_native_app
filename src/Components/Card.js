import React, {Component} from "react"
import {Image, StyleSheet, TouchableOpacity, View} from "react-native"
import {build_image_link, imageFormat} from "~/Utils/Marvel_API/image_helper"
import PropTypes from "prop-types"

export default class MarvelCard extends Component {
		
		static propTypes = {
				uri: PropTypes.string,
				style: PropTypes.object,
				onPress: PropTypes.func,
				details: PropTypes.object
		}
		
		constructor(props) {
				super(props)
		}
		
		render() {
				return (
					<View style={styles.card}>
							<TouchableOpacity onPress={() => this.props.onPress(this.props.details)}>
									<Image
										source={{uri: build_image_link(this.props.details.thumbnail.path, this.props.details.thumbnail.extension, imageFormat.portrait_uncanny)}}
										style={{height: "100%", width: "100%"}}/>
							</TouchableOpacity>
					</View>
				)
		}
}

const styles = StyleSheet.create({
		card: {
				height: 450,
				margin: 10
		}
})
