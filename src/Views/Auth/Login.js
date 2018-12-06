import {Container, Content, Header, Body, H1, View} from "native-base"
import PropTypes from "prop-types"
import React from "react"
import {StyleSheet} from "react-native"
import {connect} from "react-redux"
import ApiKeyFormPart from "~/Components/Auth/ApiKeyFormPart"
import Spacer from "~/Components/Spacer"

import {connectApi} from "~/Redux/actions/marvelApi/auth.actions"

class Login extends React.Component {
	static propTypes = {
		navigation : PropTypes.object,
		onConnect  : PropTypes.func
	}

	render() {
		return (
			<Container style={{backgroundColor : "#800000"}}>
				<Content padder contentContainerStyle={{
					flexDirection  : "column",
					justifyContent : "space-around",
					height         : "100%"
				}}>
					<View>
						<Header transparent>
							<Body style={{justifyContent : "center"}}>
							<H1 style={loginPage.marvel_logo}>
								MARVEL API
							</H1>
							</Body>
						</Header>
						<Spacer height={60}/>
						<ApiKeyFormPart onSubmit={this.props.onConnect}/>
						<Spacer height={200}/>
					</View>
				</Content>
			</Container>
		)
	}
}

const loginPage = StyleSheet.create ({
	marvel_logo : {
		lineHeight        : 60,
		textAlignVertical : "bottom",
		alignSelf         : "center",
		color             : "white",
		fontSize          : 60,
		fontWeight        : "bold"
	}
})

const mapDispatchToProps = (dispatch, props) => ({
	onConnect : (private_key, public_key) => {
		dispatch (connectApi (private_key, public_key, props.navigation))
	}
})

const mapStateToProps = (state, props) => {
	return {}
}

export default connect (
	mapStateToProps,
	mapDispatchToProps
) (Login)