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
				return (
					<View style={{width: "100%", height: "100%"}}>
							<BackgroundMarvelImage/>
							<ComicCard thumbnailUri={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
												 issueNumber={comic.issueNumber} title={comic.title} text={comic.description} characters={characters} />
					</View>
				)
		}
}

const processCharacters = (characters) => {
		let charactersProcessed = []
		for (let i = 0; i < characters.array.length; i++){
				charactersProcessed.push(characters[characters.array[i]])
		}
		return charactersProcessed
}

const mapStateToProps = (state) => {
		return ({
		characters: processCharacters(state.marvel.characters),
		series: state.marvel.series,
		eventS: state.marvel.events,
		stories: state.marvel.stories,
		creator: state.marvel.creators
})}

const mapDispatchToProps = (dispatch, props) => ({
	onLoad: (comic) => {
		for (let index in comic.characters.items) {
			dispatch(fetchCharacterById(getIdFromURI(comic.characters.items[index].resourceURI)))
		}
		for (let index in comic.stories.items) {
			//this.props.loadChars()
			dispatch(fetchStoryById(getIdFromURI(comic.stories.items[index].resourceURI)))
			//dispatch(fetchCharacterById(UrI))
		}
		for (let index in comic.events.items) {
			//this.props.loadChars()
			dispatch(fetchEventById(getIdFromURI(comic.events.items[index].resourceURI)))
			//dispatch(fetchCharacterById(UrI))
		}
		for (let index in comic.creators.items) {
			dispatch(fetchCreatorById(getIdFromURI(comic.creators.items[index].resourceURI)))
			//dispatch(fetchCharacterById(UrI))
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