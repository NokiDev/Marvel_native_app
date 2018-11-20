/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * ~format
 * ~flow
 */

import React, { Component } from "react"
import RootStack from "./Routes/Routes"
import { Provider } from "react-redux"
import {configureStore} from "~/Redux/store"

const reduxStore = configureStore({})


export default class App extends Component {

	

	render() {
		return (
			<Provider store={reduxStore}>
				<RootStack />
			</Provider>
		)
	}
}
