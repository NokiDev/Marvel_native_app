/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * ~format
 * ~flow
 */

import React, { Component } from "react"
import RootStack from "./Routes/Routes"
import { ThemeProvider } from "styled-components"
import { Provider } from "react-redux"
import {configureStore} from "~/Redux/store"

const theme = {}
const reduxStore = configureStore({})


export default class App extends Component {

	

	render() {
		return (
			<ThemeProvider theme={theme}>
				<Provider store={reduxStore}>
					<RootStack />
				</Provider>
			</ThemeProvider>
		)
	}
}
