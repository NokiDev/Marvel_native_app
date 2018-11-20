import React, {Component} from "react"
import {View} from "react-native"
import MarvelCard from "../Components/Card"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {disconnectApi, fetchComics} from "~/Redux/actions/marvelApi.actions"

class HomeView extends Component {
		
		static propTypes = {
				onDisconnect: PropTypes.func
		}
		
		constructor(props) {
				super(props)
		}
		
		componentDidMount() {
				this.onFetchComics()
		}
		
		render() {
				return (
					<View id="home">
							{/*<Button title="Erase Key" onPress={this.props.onDisconnect}/>*/}
							<MarvelCard uri={"/hello"}/>
					</View>
				)
		}
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch, props) => ({
		onDisconnect: () => {
				dispatch(disconnectApi(props.navigation))
		},
		onFetchComics: () => {
				dispatch(fetchComics())
		}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeView)