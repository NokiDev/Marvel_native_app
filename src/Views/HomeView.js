import React, {Component} from "react"
import {FlatList, StyleSheet} from "react-native"
import MarvelCard from "../Components/Card"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {disconnectApi} from "~/Redux/actions/marvelApi/auth.actions"
import {fetchComics} from "~/Redux/actions/marvelApi/comics.actions"

import {Container, Drawer, Toast} from "native-base"
import MarvelSideBar from "~/Components/SideBar"

class HomeView extends Component {
		static propTypes = {
				onDisconnect: PropTypes.func,
				onFetchComics: PropTypes.func,
				comics: PropTypes.array,
				navigation: PropTypes.object,
				comicsLoading: PropTypes.bool
		}
		
		constructor(props) {
				super(props)
				this.viewabilityConfig = {
						viewAreaCoveragePercentThreshold: 60 // sets the threshold so that we can detect which comic is take more space
				}
				this.state = {
						comicTitle: "",
						showToast: false
				}
		}
		
		componentDidMount() {
				this.props.onFetchComics()
		}
		
		componentWillUnmount() {
				this.closeDrawer()
		}
		
		closeDrawer = () => {
				if (this.drawer) {
						this.drawer._root.close()
				}
		};
		openDrawer = () => {
				this.drawer._root.open()
		};
		
		goToDetails = (details) => {
				this.props.navigation.navigate("ComicsDetails", {details: details.item})
		}
		
		onViewableItemsChanged = ({viewableItems, changed}) => {
				if (viewableItems.length !== 0)
						Toast.show({
								text: viewableItems[0].item.title,
								duration: 0,
								position: "top"
						})
		}
		
		/*renderListFooter = () => {
				return(<Spinner color={"white"}/>)
		}*/
		
		render() {
				return (
					<Drawer
						ref={(ref) => {
								this.drawer = ref
						}}
						type='displace'
						content={<MarvelSideBar styles={homeView.sidebar} navigation={this.props.navigation}/>}
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
										ListFooterComponent={this.renderListFooter}
										onEndReached={() => console.log('reached end')}
										viewabilityConfig={this.viewabilityConfig}
										onViewableItemsChanged={this.onViewableItemsChanged}
										style={homeView.flatList}
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
		view: {
				backgroundColor: "#800000",
				height: "100%"
		},
		flatList: {
				paddingLeft: 20,
				paddingRight: 20
		}
})

const mapStateToProps = (state) => ({
		comics: state.marvel.comics.array,
		comicsLoading: state.marvel.comics.isLoading
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