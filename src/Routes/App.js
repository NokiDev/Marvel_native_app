import {createStackNavigator} from "react-navigation"
import React from "react"

import HomeView from "~/Views/HomeView"
import ComicsDetails from "~/Views/ComicsDetails"
import CustomMarvelHeader from "~/Components/CustomMarvelHeader"

const RootStack = createStackNavigator({
			Home: {
					screen: HomeView
			},
			ComicsDetails: {
					screen: ComicsDetails
			}
	},
	{
			initialRouteName: "Home",
			navigationOptions: {
				headerBackground: <CustomMarvelHeader homePage="http://marvel.com"/>,
					headerStyle: {
							backgroundColor: "transparent",
							borderBottomWidth: 0
					},
					headerTransparent: false
			}
	}
)

export default createStackNavigator(
	{
			Home: RootStack,
			navigationOptions: () => ({
					title: "Home",
			})
	},
	{
			initialRouteName: "Home",
			headerMode: "none",
			navigationOptions: {
					headerVisible: false,
			}
	}
)
