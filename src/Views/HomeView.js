import React, {Component} from "react"
import { StyleSheet, FlatList} from "react-native"
import MarvelCard from "../Components/Card"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {disconnectApi, fetchComics} from "~/Redux/actions/marvelApi.actions"

import { Drawer, Container } from "native-base"
import MarvelSideBar from "~/Components/SideBar"

class HomeView extends Component {
		static propTypes = {
				onDisconnect: PropTypes.func,
				onFetchComics: PropTypes.func,
				comics: PropTypes.array,
				navigation: PropTypes.object
		}
		
		constructor(props) {
				super(props)
		}
		
		componentDidMount() {
				this.props.onFetchComics()
		}

		componentWillUnmount() {
			this.closeDrawer()
		}
		
		closeDrawer = () => {
			if(this.drawer) {
				this.drawer._root.close()
			}
		};
		openDrawer = () => {
			this.drawer._root.open()
		};
		
		goToDetails = (details) => {
			this.props.navigation.navigate("ComicsDetails", {details: details.item})
		}

		render() {
			return (
				<Drawer
					ref={(ref) => { this.drawer = ref }}
					type='displace'
					content={<MarvelSideBar styles={homeView.sidebar} navigation={this.props.navigation} />}
					onClose={() => this.closeDrawer()}
					onOpen={() => this.openDrawer()}
					side="left"
					openDrawerOffset={0.2}
					closedDrawerOffset={0}
					panOpenMask={.3}
					panCloseMask={.3}
					acceptPan={true}
					>
					<Container style={homeView.view} id="home">
							<FlatList
								data={this.props.comics}
								keyExtractor={item => item.id.toString()}
								renderItem={(details) => <MarvelCard details={details} onPress={this.goToDetails} uri={"/hello"}/>}
							/>
					</Container>
				</Drawer>
			)
		}
}

const homeView = StyleSheet.create({
	view : {
		backgroundColor : "#800000",
		height : "100%"
	}
})

const mapStateToProps = (state) => ({
		comics: state.marvelApiReducers.comics.array
})

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