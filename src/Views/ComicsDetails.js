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
				characters: PropTypes.array,
				creators: PropTypes.array,
				series: PropTypes.array,
				stories: PropTypes.array,
				events: PropTypes.array
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
				let {characters, creators, series, stories, events} = this.props
				return (
					<View style={{width: "100%", height: "100%"}}>
							<BackgroundMarvelImage/>
							<ComicCard thumbnailUri={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
												 issueNumber={comic.issueNumber} title={comic.title} text={comic.description}
												 characters={characters} creators={creators} series={series} stories={stories} events={events}/>
					</View>
				)
		}
}

ComicsDetails.propTypes = {
		onLoad: PropTypes.func
}


const processArray = (object, props, objectKey) => {
		const comic = props.navigation.getParam("details")
		return comic[objectKey].items.map(item => object[getIdFromURI(item.resourceURI)]).filter(arrayItem => arrayItem !== undefined)
}
const processItem = (object, props) => {
		const comic = props.navigation.getParam("details")
		return object[comic.series.resourceURI]
}

const mapStateToProps = (state, props) => ({
		characters: processArray(state.marvel.characters, props, "characters"),
		series: processItem(state.marvel.series, props),
		events: processArray(state.marvel.events, props, "events"),
		stories: processArray(state.marvel.stories, props, "stories"),
		creators: processArray(state.marvel.creators, props, "creators")
})

const mapDispatchToProps = (dispatch) => ({
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