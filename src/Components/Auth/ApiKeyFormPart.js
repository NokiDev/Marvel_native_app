
import React from "react"
import PropTypes from "prop-types"
import { Button, Item, Input, H1, View} from "native-base"
import { Text } from "react-native"
import Spacer from "~/Components/Spacer"

export default class ApiKeyFormPart extends React.Component {
static propTypes = {
	onSubmit: PropTypes.func
}

	constructor(props) {
		super(props)
		this.state = {
			private_api_key : "",
			public_api_key : ""
		}
	}

	render() {
		return (
			<View>
				<Spacer height={20}/>
				<Item style={{backgroundColor: "white"}} regular>
					<Input onChangeText={(text) => {
						this.setState({
							private_api_key : text
						})
					}} placeholder={"Enter Private Api Key"}/>
				</Item>
				<Spacer height={10}/>
				<Item style={{backgroundColor: "white"}} regular>
					<Input onChangeText={(text) => {
						this.setState({
							public_api_key : text
						})
					}} placeholder={"Enter Public Api Key"}/>
				</Item>
				<Spacer height={10}/>
				<Button success disabled={this.state.public_api_key === "" || this.state.private_api_key === ""} block onPress={() => {this.props.onSubmit(this.state.private_api_key, this.state.public_api_key)}}>
					<Text style={{color: "white"}}>
						Confirm
					</Text>
				</Button>
			</View>
		)
	}
}