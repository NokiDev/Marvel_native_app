import React from "react"
import PropTypes from "prop-types"
import { View } from "react-native"

export default class Spacer extends React.Component {
static propTypes = {
	width: PropTypes.number,
	height: PropTypes.number
}

render() {
	return (
		<View style={{width: this.props.width, height: this.props.height}}/>
	)
}
}
