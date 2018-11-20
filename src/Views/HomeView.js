import React, {Component} from "react"
import {View} from "react-native"
import MarvelCard from "../Components/Card"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {disconnectApi, fetchComics} from "~/Redux/actions/marvelApi.actions"

import { Drawer } from 'native-base';
import MarvelSideBar from '~/Components/SideBar';

class HomeView extends Component {
		static propTypes = {
				onDisconnect: PropTypes.func
		}
		
		constructor(props) {
				super(props)
		}
		
		componentDidMount() {
				//this.props.onFetchComics()
		}
		
		closeDrawer = () => {
			this.drawer._root.close()
		};
		openDrawer = () => {
			this.drawer._root.open()
		};

		render() {
			return (
				<Drawer
					ref={(ref) => { this.drawer = ref; }}
					type='displace'
					content={<MarvelSideBar navigation={this.props.navigation} />}
					onClose={() => this.closeDrawer()}
					onOpen={() => this.openDrawer()}
					side="left"
					openDrawerOffset={0.2}
					closedDrawerOffset={0}
					panOpenMask={.3}
					panCloseMask={.50}
					acceptPan={true}
					>
					<View id="home">
						{}
						<MarvelCard uri={"/hello"}/>
					</View>
				</Drawer>
				
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