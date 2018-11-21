import React, {Component} from "react"
import { StyleSheet} from "react-native"
import MarvelCard from "../Components/Card"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {disconnectApi, fetchComics} from "~/Redux/actions/marvelApi.actions"

import { Drawer, Container } from "native-base"
import MarvelSideBar from "~/Components/SideBar"

class HomeView extends Component {
		static propTypes = {
				onDisconnect: PropTypes.func,
				onFetchComics: PropTypes.func
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
		
		logSomething = () => {
				console.log("logged man")
		}

		render() {
			return (
				<Drawer
					ref={(ref) => { this.drawer = ref }}
					type='displace'
					content={<MarvelSideBar styles={homeView.sidebar} navigation={this.props.navigation} />}
					onClose={() => this.closeDrawer()}
					onOpen={() => this.logSomething()}
					side="left"
					openDrawerOffset={0.2}
					closedDrawerOffset={0}
					panOpenMask={.3}
					panCloseMask={.3}
					acceptPan={true}
					>
					<Container style={homeView.view} id="home">
						{}
						<MarvelCard uri={"/hello"}/>
					</Container>
				</Drawer>
				
			)
		}
}

const mapStateToProps = (state) => ({
		state: state
})

const homeView = StyleSheet.create({
	view : {
		backgroundColor : "#800000",
		height : "100%"
	}
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