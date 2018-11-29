/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * ~format
 * ~flow
 */

import React, {Component} from "react"
import {Platform, StyleSheet, View} from "react-native"
import RootStack from "./Routes/Routes"
import {Provider} from "react-redux"
import {configureStore} from "~/Redux/store"

const reduxStore = configureStore({})

export default class App extends Component {
	render() {
		return (
			<Provider store={reduxStore}>
				<View style={{height: "100%"}}>
					<View style={styles.statusBarBackground}>
					</View>
					<RootStack/>
				</View>
			</Provider>
		)
	}
}

const styles = StyleSheet.create({
	statusBarBackground: {
		backgroundColor: "#800000",
		height: (Platform.OS === "ios") ? 20 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
	}
})