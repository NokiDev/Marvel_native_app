import React, {Component} from "react"
import {Image} from "react-native"
import {Body, Card, CardItem, Text} from "native-base"
import PropTypes from "prop-types"

export default class MarvelCard extends Component {

	 static propTypes = {
			uri: PropTypes.string
	 }

	 render() {
			return (
			 <Card>
					<CardItem>
						 <Body>
						 <Text>NativeBase</Text>
						 <Text note>GeekyAnts</Text>
						 </Body>
					</CardItem>
					<CardItem cardBody>
						 <Image source={{uri: this.props.uri}} style={{height: 200, width: null, flex: 1}}/>
					</CardItem>
			 </Card>
			)
	 }
}