import React, {Component} from "react"
import {Body, Card, CardItem, Left, Text, Thumbnail} from "native-base"
import {StyleSheet} from "react-native"
import PropTypes from "prop-types"
import Resume from "./Resume"

export default class ComicCard extends Component {
		
		static propTypes = {
				thumbnailUri: PropTypes.string,
				issueNumber: PropTypes.number,
				title: PropTypes.string,
				text: PropTypes.object
		}
		
		render() {
				let {thumbnailUri, title, issueNumber, text} = this.props
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
									<Resume text={text} maxTextLength={20} stripChars={"..."}/>
							</CardItem>
							<CardItem cardBody>
								<Text style={styles.titles}>Characters</Text>
							</CardItem>
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
		}
})