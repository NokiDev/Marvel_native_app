import React, {Component} from "react"
import {View} from "react-native"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {fetchCharacterById} from "~/Redux/actions/marvelApi/characters.actions"
import {fetchEventById} from "~/Redux/actions/marvelApi/events.actions"
import {fetchSeriesById} from "~/Redux/actions/marvelApi/series.actions"
import {fetchStoryById} from "~/Redux/actions/marvelApi/stories.actions"
import {fetchCreatorById} from "~/Redux/actions/marvelApi/creators.actions"
import {getIdFromURI} from "~/Utils/Marvel_API/request_helper"
import BackgroundMarvelImage from "~/Components/BackgroundMarvelImage"
import ComicCard from "~/Components/ComicCard"

class ComicsDetails extends Component {
		static propTypes = {
				navigation: PropTypes.object,
				characters: PropTypes.array
		}

		constructor(props) {
				super(props)

			const comic = this.props.navigation.getParam("details")
				this.state = {
						comic: {
								...comic,
								description: comic.description ? comic.description.replace(/<br>/gi, "\n") : comic.description
						}
				}
		}

	componentDidMount() {
				this.props.onLoad(this.state.comic)
		}

	render() {
				let {comic} = this.state
				let {characters} = this.props
				const dataArray = [
						{ title: "First Element", content: "Lorem ipsum dolor sit amet" },
						{ title: "Second Element", content: "Lorem ipsum dolor sit amet" },
						{ title: "Third Element", content: "Lorem ipsum dolor sit amet" }
				];
				return (
					<View style={{width: "100%", height: "100%"}}>
							<BackgroundMarvelImage/>
							<ComicCard thumbnailUri={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
												 issueNumber={comic.issueNumber} title={comic.title} text={comic.description} characters={dataArray} />
					</View>
				)
		}
}

const processCharacters = (characters, props) => {
	const comic = props.navigation.getParam("details")

	console.log(comic)
	return comic.characters.items.map(item => characters[getIdFromURI(item.resourceURI)])
}

const processSeries = (series, props) => {
	const comic = props.navigation.getParam("details")
	return series[comic.series.resourceURI]
}

const processStories = (stories, props) => {
	const comic = props.navigation.getParam("details")
	return comic.stories.items.map(item => stories[getIdFromURI(item.resourceURI)])
}

const processEvents = (events, props) => {
	const comic = props.navigation.getParam("details")
	return comic.events.items.map(item => events[getIdFromURI(item.resourceURI)])
}

const processCreators = (creators, props) => {
	const comic = props.navigation.getParam("details")
	return comic.creators.items.map(item => creators[getIdFromURI(item.resourceURI)])
}

const mapStateToProps = (state, props) => ({
	characters: processCharacters(state.marvel.characters, props),
	series: processSeries(state.marvel.series, props),
	events: processEvents(state.marvel.events, props),
	stories: processStories(state.marvel.stories, props),
	creator: processCreators(state.marvel.creators, props)
})

const mapDispatchToProps = (dispatch, props) => ({
	onLoad: (comic) => {
		for (let index in comic.characters.items) {
			dispatch(fetchCharacterById(getIdFromURI(comic.characters.items[index].resourceURI)))
		}
		for (let index in comic.stories.items) {
			dispatch(fetchStoryById(getIdFromURI(comic.stories.items[index].resourceURI)))
		}
		for (let index in comic.events.items) {
			dispatch(fetchEventById(getIdFromURI(comic.events.items[index].resourceURI)))
		}
		for (let index in comic.creators.items) {
			dispatch(fetchCreatorById(getIdFromURI(comic.creators.items[index].resourceURI)))
		}
		if (comic.series) {
			dispatch(fetchSeriesById(getIdFromURI(comic.series.resourceURI)))
		}
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ComicsDetails)