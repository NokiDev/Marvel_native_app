import {Container} from "native-base"
import PropTypes from "prop-types"
import React from "react"
import {ActivityIndicator, StatusBar} from "react-native"
import {connect} from "react-redux"
// TODO make a global reinit state.
import {resumeConnectApi} from "~/Redux/actions/marvelApi/auth.actions"


class AuthLoading extends React.Component {

	static propTypes = {
		navigation : PropTypes.object,
		onLoad     : PropTypes.func
	}

	constructor(props) {
		super (props)
	}

	componentDidMount() {
		this.props.onLoad ()
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
		dispatch (resumeConnectApi (props.navigation))
	}
})

const mapStateToProps = () => {
	return {}
}


export default connect (
	mapStateToProps,
	mapDispatchToProps
) (AuthLoading)