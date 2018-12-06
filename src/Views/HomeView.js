import {Container, Drawer, Spinner} from "native-base"
import PropTypes from "prop-types"
import React, {Component} from "react"
import {FlatList, Image, StyleSheet} from "react-native"
import {connect} from "react-redux"
import assets from "~/assets/assets"
import CustomToast from "~/Components/CustomToast"
import MarvelSideBar from "~/Components/SideBar"

import {disconnectApi} from "~/Redux/actions/marvelApi/auth.actions"
import {fetchComics} from "~/Redux/actions/marvelApi/comics.actions"

import MarvelCard from "../Components/Card"

class HomeView extends Component {
	static propTypes = {
		onDisconnect  : PropTypes.func,
		onFetchComics : PropTypes.func,
		comics        : PropTypes.object,
		navigation    : PropTypes.object,
		comicsLoading : PropTypes.bool
	}

	viewabilityConfig = {
		viewAreaCoveragePercentThreshold : 60 // sets the threshold so that we can detect which comic is take more space
	}

	state = {
		comicTitle : "",
		showToast  : false
	}

	componentDidMount() {
		if (this.props.comics.array.length === 0) {
			this.props.onFetchComics ()
		}
	}

	componentWillUnmount() {
		this.closeDrawer ()
	}

	closeDrawer = () => {
		if (this.drawer) {
			this.drawer._root.close ()
		}
	}

	openDrawer = async () => {
		this.drawer._root.open ()
	}

	goToDetails = (details) => {
		this.props.navigation.navigate ("ComicsDetails", {details : details})
	}

	onViewableItemsChanged = ({viewableItems, changed}) => {
		if (viewableItems.length !== 0) {
			this.setState ({comicTitle : this.props.comics[viewableItems[0].item].title})
		}
	}

	renderListFooter = () => {
		if (this.props.comics.isLoading) {
			return (<Spinner color={"white"}/>)
		}
		return null

	}

	render() {
		return (
			<Drawer ref={(ref) => {
				this.drawer = ref
			}}
					type="displace"
					content={<MarvelSideBar navigation={this.props.navigation}/>}
					onClose={() => this.closeDrawer ()}
					onOpen={() => this.openDrawer ()}
					side="left"
					openDrawerOffset={0.2}
					closedDrawerOffset={0}
					panOpenMask={0.3}
					panCloseMask={0.3}
					acceptPan
			>
				<Container style={homeView.view} id="home">
					<Image style={homeView.background} width={"100%"} height={"100%"}
						   source={assets.images.MarvelBackground}/>
					<CustomToast show={this.props.comics.array.length > 0} text={this.state.comicTitle}
								 backgroundColor={"black"} textColor={"white"}/>
					<FlatList ListFooterComponent={this.renderListFooter}
							  onEndReachedThreshold={2}
							  onEndReached={this.props.onFetchComics}
							  viewabilityConfig={this.viewabilityConfig}
							  onViewableItemsChanged={this.onViewableItemsChanged}
							  style={homeView.flatList}
							  data={this.props.comics.array}
							  keyExtractor={id => `${id}`}
							  renderItem={(item) => {
								  return <MarvelCard details={this.props.comics[item.item]} onPress={this.goToDetails}
													 uri={"/hello"}/>
							  }}
					/>
				</Container>
			</Drawer>
		)
	}
}

const homeView = StyleSheet.create ({
	view: {
		height          : "100%",
		backgroundColor : "transparent"
	},
	background: {
		position : "absolute",
		top      : 0,
		bottom   : 0,
		left     : 0,
		right    : 0,
		width    : "100%",
		height   : "100%"
	},
	flatList: {
		paddingLeft  : 20,
		paddingRight : 20
	},
	flatListPlaceholder: {
		width         : "100%",
		height        : "100%",
		display       : "flex",
		flexDirection : "column",
		alignItems    : "center"
	}
})

const mapStateToProps = (state) => ({
	comics: state.marvel.comics
})

const mapDispatchToProps = (dispatch, props) => ({
	onDisconnect: () => {
		dispatch (disconnectApi (props.navigation))
	},
	onFetchComics: () => {
		dispatch (fetchComics ())
	}
})

export default connect (
	mapStateToProps,
	mapDispatchToProps
) (HomeView)