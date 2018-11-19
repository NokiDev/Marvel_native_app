import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {AsyncStorage, Text} from "react-native"
import {Container, Content, Header} from "native-base"
import ApiKeyFormPart from "~/Components/Auth/ApiKeyFormPart"

import {connectApi} from "~/Redux/actions/marvelApi.actions"

class Login extends React.Component {
static propTypes = {
	navigation : PropTypes.object,
	OnConnect : PropTypes.func
}

	_storeData = async (private_api_key, public_api_key) => {
		try {
			await AsyncStorage.setItem("private_api_token", private_api_key)
			await AsyncStorage.setItem("public_api_token", public_api_key)
			this.props.navigation.navigate("Home")
		} catch (error) {
			// Error saving data
		}
	}

	render() {
		return (
			<Container>
				<Content>
					<Header/>
					<Text>{JSON.stringify(this.props)}</Text>
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
		console.log("CALLED")
		dispatch(connectApi(private_key,public_key))
	}
	// Find a way to navigate to home on success. this.props.navigation.navigate("Home");
	//dispatch(connectApi(private_api_key, public_api_key))
})

const mapStateToProps = (state, props) => ({
	
})


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)