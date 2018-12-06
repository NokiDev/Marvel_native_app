import React from "react"
import {createStackNavigator} from "react-navigation"
import CustomMarvelHeader from "~/Components/CustomMarvelHeader"
import ComicsDetails from "~/Views/ComicsDetails"

import HomeView from "~/Views/HomeView"

const RootStack = createStackNavigator ({
		Home: {
			screen: HomeView
		},
		ComicsDetails: {
			screen: ComicsDetails
		}
	},
	{
		initialRouteName  : "Home",
		navigationOptions : {
			headerBackground : <CustomMarvelHeader homePage="http://marvel.com"/>,
			headerStyle      : {
				backgroundColor   : "transparent",
				borderBottomWidth : 0
			},
			headerTransparent: false
		}
	}
)

export default createStackNavigator (
	{
		Home              : RootStack,
		navigationOptions : () => ({
			title : "Home"
		})
	},
	{
		initialRouteName  : "Home",
		headerMode        : "none",
		navigationOptions : {
			headerVisible : false
		}
	}
)
