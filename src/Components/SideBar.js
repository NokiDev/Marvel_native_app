import React, {Component} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {StyleSheet, Text, View} from "react-native"
import {Button, Icon} from "native-base"

import {disconnectApi} from "~/Redux/actions/marvelApi/auth.actions"

class MarvelSideBar extends Component {
	static propTypes = {
		navigation: PropTypes.object,
		onDisconnect: PropTypes.func,
		public_key: PropTypes.string,
		private_key: PropTypes.string,
	}

	render() {

		return (
			<View style={{backgroundColor: "white", height: "100%"}}>
				<View style={styles.buttonWrapper}><Button danger onPress={this.props.onDisconnect}><Icon
					type={"FontAwesome"} name='power-off'/></Button></View>
				<Text style={{color: "white"}}>Connected with</Text>
				<Text>{this.props.private_key}</Text>
				<Text>{this.props.public_key}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	buttonWrapper: {
		position: "absolute",
		bottom: 5,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: "100%"
	}
})

const mapStateToProps = (state) => ({
	private_key: state.marvel.auth.apiKeys.private,
	public_key: state.marvel.auth.apiKeys.public,
})

const mapDispatchToProps = (dispatch, props) => ({
	onDisconnect: () => {
		dispatch(disconnectApi(props.navigation))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MarvelSideBar)