import {Accordion, Body, Card, CardItem, Left, Text, Thumbnail, View} from "native-base"
import PropTypes from "prop-types"
import React, {Component} from "react"
import {StyleSheet} from "react-native"
import Resume from "./Resume"

export default class ComicCard extends Component {

	static propTypes = {
		thumbnailUri : PropTypes.string,
		issueNumber  : PropTypes.number,
		title        : PropTypes.string,
		text         : PropTypes.string,
		characters   : PropTypes.array,
		events       : PropTypes.array,
		stories      : PropTypes.array,
		creators     : PropTypes.array
	}

	renderItemHeader = (obj, expandable) => {
		const item = obj.content[0]
		return (
			<View style={styles.titleItems}>
				{item.thumbnail ? (
					<Thumbnail small source={{uri : `${item.thumbnail.path}.${item.thumbnail.extension}`}}/>) : null}
				<Text style={{paddingLeft : 5}}>{item.name || item.fullName || item.title}</Text>
			</View>
		)
	}

	renderCatContent = (obj, expandable) => {
		const data = obj.content.map (item => ({title : item.name || item.fullName, content : [item]}))
		return <Accordion dataArray={data} renderContent={this.renderItemContent} renderHeader={this.renderItemHeader}/>
	}

	renderItemContent = (obj, expandable) => {
		const item = obj.content[0]
		if (item.description) {
			return (
				<Text style={{padding : 10}}>{item.description}</Text>
			)
		}
	}

	render() {
		let {thumbnailUri, title, issueNumber, text, characters, stories, creators, events} = this.props
		let accordion = [
			{title : "Characters", content : characters},
			{title : "Creators", content : creators},
			{title : "Stories", content : stories},
			{title : "Events", content : events}
		]
		console.log ("events", events)
		return (
			<Card style={styles.card}>
				<CardItem>
					<Left>
						<Thumbnail square source={{uri : thumbnailUri || ""}}/>
						<Body>
						<Text>{title}</Text>
						<Text note>Volume: {issueNumber}</Text>
						</Body>
					</Left>
				</CardItem>
				<CardItem cardBody>
					<Resume maxTextLength={200} stripChars={"..."} text={text}/>
				</CardItem>
			</Card>
		)
	}
}


const styles = StyleSheet.create ({
	card       : {
		marginLeft  : 10,
		marginRight : 10
	},
	titles     : {
		width      : "100%",
		textAlign  : "center",
		padding    : 10,
		fontWeight : "bold",
		color      : "#7F0000"
	},
	titleItems : {
		display        : "flex",
		flexDirection  : "row",
		justifyContent : "flex-start",
		alignItems     : "center",
		padding        : 5
	}
})