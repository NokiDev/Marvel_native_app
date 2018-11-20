import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {AsyncStorage} from "react-native"
import {Container, Content, Header} from "native-base"
import ApiKeyFormPart from "~/Components/Auth/ApiKeyFormPart"

import {connectApi} from "~/Redux/actions/marvelApi.actions"

class Login extends React.Component {
static propTypes = {
	navigation : PropTypes.object,
	onConnect : PropTypes.func
}

	render() {
		return (
			<Container>
				<Content>
					<Header/>
					<Container style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						flexDirection: "column"
					}}>
						<ApiKeyFormPart api_name="MARVEL API" onSubmit={this.props.onConnect}/>
					</Container>
				</Content>
			</Container>
		)
	}
}

const mapDispatchToProps = (dispatch, props) => ({
	onConnect: (private_key, public_key ) => {
		dispatch(connectApi(private_key,public_key, props.navigation))
	}
	// Find a way to navigate to home on success. this.props.navigation.navigate("Home");
	//dispatch(connectApi(private_api_key, public_api_key))
})

const mapStateToProps = (state, props) => {
	return {}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)