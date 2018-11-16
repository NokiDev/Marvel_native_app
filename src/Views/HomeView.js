import React, { Component } from "react"
import { View, Button} from "react-native"
import { Header } from "native-base"

export default class HomeView extends Component {

	constructor(props) {
		super(props)
	}

	ComponentDidMount() {

	}

	render() {
		return (
			<View id="home">
				<Header>
					<Button title="Erase Key" onPress={() => { this._removeData()}}></Button>
				</Header>
			</View>
		)
	}
}
