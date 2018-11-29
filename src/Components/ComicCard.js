import React, {Component} from "react"
import {Accordion, Body, Card, CardItem, Left, Text, Thumbnail, View} from "native-base"
import {StyleSheet} from "react-native"
import PropTypes from "prop-types"
import Resume from "./Resume"

export default class ComicCard extends Component {
		
		static propTypes = {
				thumbnailUri: PropTypes.string,
				issueNumber: PropTypes.number,
				title: PropTypes.string,
				text: PropTypes.string,
				characters: PropTypes.array,
				events: PropTypes.array,
				series: PropTypes.array,
				stories: PropTypes.array,
				creators: PropTypes.array,
		}
		
		renderItemHeader = (obj, expandable) => {
				const item = obj.content[0]
				return (
					<View style={styles.titleItems}>
							<Thumbnail small source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}/>
							<Text style={{paddingLeft: 5}}>{item.name}</Text>
					</View>
				)
		}
		
		renderCatContent = (obj, expandable) => {
				const data = obj.content.map(item => ({title: item.name, content: [item]}))
				return <Accordion dataArray={data} renderHeader={this.renderItemHeader} renderContent={this.renderItemContent}/>
		}
		
		renderItemContent = (obj, expandable) => {
				const item = obj.content[0]
				return (
					<Text style={{padding: 10}}>{item.description}</Text>
				)
		}
		
		render() {
				let {thumbnailUri, title, issueNumber, text, characters, stories, series, creators, events} = this.props
				let accordion = [
						{title: "Characters", content: characters},
						{title: "Creators", content: creators},
						{title: "Series", content: series},
						{title: "Stories", content: stories},
						{title: "Events", content: events},
				]
				return (
					<Card style={styles.card}>
							<CardItem>
									<Left>
											<Thumbnail source={{uri: thumbnailUri}}/>
											<Body>
											<Text>{title}</Text>
											<Text note>Volume: {issueNumber}</Text>
											</Body>
									</Left>
							</CardItem>
							<CardItem cardBody>
									<Resume text={text} maxTextLength={200} stripChars={"..."}/>
							</CardItem>
							<Accordion padding dataArray={accordion} renderContent={this.renderCatContent}/>
					</Card>
				)
		}
}


const styles = StyleSheet.create({
		card: {
				marginLeft: 10,
				marginRight: 10
		},
		titles: {
				width: "100%",
				textAlign: "center",
				padding: 10,
				fontWeight: "bold",
				color: "#7F0000"
		},
		titleItems: {
				display: "flex",
				flexDirection: "row",
				justifyContent: "flex-start",
				alignItems: "center",
				padding: 5
		}
})