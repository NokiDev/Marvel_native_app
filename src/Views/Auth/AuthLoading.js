import React from "react"
import {
	ActivityIndicator,
	AsyncStorage,
	StatusBar,
	View
} from "react-native"
import PropTypes from "prop-types"
import { connect } from "react-redux";

// TODO make a global reinit state.
import { resumeConnectApi } from '~/Redux/actions/marvelApi.actions'



class AuthLoading extends React.Component {

	static propTypes = {
		navigation : PropTypes.object,
		onLoad: PropTypes.func
	}

	constructor(props) {
		super(props)
		
	}

	componentDidMount() {
		this.props.onLoad()
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

const mapDispatchToProps = (dispatch, props) => ({
	onLoad : () => {
		dispatch(resumeConnectApi(props.navigation))
	}
})

const mapStateToProps = (state) => {
	return {}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthLoading)