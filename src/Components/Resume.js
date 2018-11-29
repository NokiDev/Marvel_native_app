import React, {Component} from "react"
import PropTypes from "prop-types"
import {Text, View} from "react-native"
import {Body, Button, CardItem} from "native-base"


class Resume extends Component {

	state = {
		moreHidden: false
	}

	splitText() {
		return this.props.text.split("", this.props.maxTextLength).concat(this.props.stripChars)
	}

	displayMore() {
		this.setState({
			moreHidden: !this.state.moreHidden
		})
	}

	renderItem() {

		if (this.props.text) {
			item = (
				<View>
					<Text
						style={{alignSelf: "center"}}> {this.state.moreHidden ? this.props.text : this.splitText()} </Text>
					<Button block transparent light onPress={() => {
						this.displayMore()
					}}><Text>{this.state.moreHidden ? "Show Less" : "Show More"}</Text></Button>
				</View>
			)
		} else {
			item = (
				<View>
					<Text style={{alignSelf: "center"}}> No Description </Text>
				</View>
			)
		}
		let item

		return item
	}

	render() {

		return (
			<CardItem>
				<Body>
				{this.renderItem()}
				</Body>
			</CardItem>
		)
	}
}

Resume.propTypes = {
	text: PropTypes.string,
	maxTextLength: PropTypes.number,
	stripChars: PropTypes.string
}

export default Resume