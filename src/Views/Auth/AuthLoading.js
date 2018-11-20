import React from "react"
import {
	ActivityIndicator,
	StatusBar
} from "react-native"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Container } from "native-base"
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
			<Container>
				<ActivityIndicator/>
				<StatusBar barStyle="default"/>
			</Container>
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