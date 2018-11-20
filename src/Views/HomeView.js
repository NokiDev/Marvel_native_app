import React, { Component } from "react"
import { View, Button} from "react-native"
import { Header } from "native-base"
import { connect} from 'react-redux'

import { disconnectApi } from '~/Redux/actions/marvelApi.actions'

class HomeView extends Component {

	constructor(props) {
		super(props)
	}

	ComponentDidMount() {

	}

	render() {
		return (
			<View id="home">
				<Header>
					<Button title="Erase Key" onPress={this.props.onDisconnect}/>
				</Header>
			</View>
		)
	}
}

const mapDispatchToProps = (dispatch, props) => ({
	onDisconnect: () => {
		dispatch(disconnectApi(props.navigation))
	}
})

export default connect(
	(state) => ({}),
	mapDispatchToProps
)(HomeView)