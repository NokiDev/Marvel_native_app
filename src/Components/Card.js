import React, {Component} from "react"
import {Image, TouchableOpacity} from "react-native"
import {Body, Card, CardItem, Text} from "native-base"
import PropTypes from "prop-types"

export default class MarvelCard extends Component {
		
		static propTypes = {
				uri: PropTypes.string,
				style: PropTypes.object,
				onPress: PropTypes.func,
				details: PropTypes.object
		}
		
		render() {
				return (
					<Card>
							<TouchableOpacity onPress={() => this.props.onPress(this.props.details)}>
									<CardItem>
											<Body>
											<Text>NativeBase</Text>
											<Text note>GeekyAnts</Text>
											</Body>
									</CardItem>
									<CardItem cardBody>
											<Image source={{uri: this.props.uri}} style={{height: 200, width: null, flex: 1}}/>
									</CardItem>
							</TouchableOpacity>
					</Card>
				)
		}
}