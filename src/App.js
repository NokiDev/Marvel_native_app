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
import reduxStore from "~/Redux/store"

const theme = {}

export default class App extends Component {
	render() {
		return (
			<Provider store={reduxStore}>
				<ThemeProvider theme={theme}>
					<RootStack />
				</ThemeProvider>
			</Provider>
		)
	}
}
