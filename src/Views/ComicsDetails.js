import React, {Component} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"

import {View} from "react-native"
import {fetchCharacterById} from "~/Redux/actions/marvelApi/characters.actions"

import {getIdFromURI} from "~/Utils/Marvel_API/request_helper"
import {build_image_link, imageFormat} from "~/Utils/Marvel_API/image_helper"
import Resume from "../Components/Resume"

class ComicsDetails extends Component {
		static propTypes = {
				navigation: PropTypes.object
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
			console.log("details", this.state.comic)
			this.props.onLoad(this.state.comic)
		}

		componentWillUnmount() {

		}

	render() {
				return (
					<View>
						<Image
							source={{uri: build_image_link(this.state.comic.thumbnail.path, this.state.comic.extension, imageFormat.landscape_large)}}
							style={{height: "100%", width: "100%"}}/>
						<Text>{this.state.comic.title}</Text>
					</View>
				)
		}
}

ComicsDetails.propTypes = {
	onLoad: PropTypes.func
}

const mapStateToProps = (state) => ({
	characters: state.characters,
	series: state.series,
	eventS: state.events,
	stories:state.stories,
	creator:state.creators
})

const mapDispatchToProps = (dispatch, props) =>({
	onLoad: (comic) => {
		for(let index in comic.characters.items){
			dispatch(fetchCharacterById(getIdFromURI(comic.characters.items[index].resourceURI)))
		}
		for(let index in comic.stories.items){
			//this.props.loadChars()
			//dispatch(fetchCharacterById(UrI))
		}
		for(let index in comic.series.items){
			//this.props.loadChars()
			//dispatch(fetchCharacterById(UrI))
		}
		for(let index in comic.events.items){
			//this.props.loadChars()
			//dispatch(fetchCharacterById(UrI))
		}
		for(let index in comic.creators.items){
			//this.props.loadChars()
			//dispatch(fetchCharacterById(UrI))
		}
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ComicsDetails)