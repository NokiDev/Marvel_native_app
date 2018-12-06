import PropTypes from "prop-types"
import React, {Component} from "react"
import {StyleSheet, Text, View} from "react-native"

export default class CustomToast extends Component {
	static propTypes = {
		text            : PropTypes.string,
		backgroundColor : PropTypes.string,
		textColor       : PropTypes.string,
		show            : PropTypes.bool
	}

	render() {
		if (this.props.show) {
			return (
				<View style={{backgroundColor : this.props.backgroundColor, ...styles.view}}>
					<Text style={{color : this.props.textColor}}>{this.props.text}</Text>
				</View>
			)
		}
		return null

	}
}

const styles = StyleSheet.create ({
	view : {
		position                : "absolute",
		top                     : 20,
		width                   : "90%",
		left                    : 0,
		zIndex                  : 1000,
		borderWidth             : 2,
		borderColor             : "black",
		paddingTop              : 5,
		paddingBottom           : 5,
		paddingLeft             : 5,
		borderBottomRightRadius : 10,
		borderTopRightRadius    : 10
	}
})

