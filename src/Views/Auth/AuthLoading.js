import React from "react"
import {
	ActivityIndicator,
	AsyncStorage,
	StatusBar,
	View
} from "react-native"
import PropTypes from "prop-types"

export default class AuthLoading extends React.Component {

	static propTypes = {
		navigation : PropTypes.object
	}

	constructor(props) {
		super(props)
		this._bootstrapAsync()
	}

	// Fetch the token from storage then navigate to our appropriate place
	_bootstrapAsync = async () => {
		const userToken = await AsyncStorage.getItem("api_token")
		/// Api key is found
		if (userToken) {
			// Dispatch connect action
			this.props.navigation.navigate("App")
		}
		else {
			this.props.navigation.navigate("Auth")
		}
	}

	// Render any loading content that you like here
	render() {
		return (
			<View>
				<ActivityIndicator/>
				<StatusBar barStyle="default"/>
			</View>
		)
	}
}
