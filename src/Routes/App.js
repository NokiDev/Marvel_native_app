import { createStackNavigator } from "react-navigation"

import HomeView from "~/Views/HomeView"

const RootStack = createStackNavigator({
	Home: {
		screen: HomeView
	}
})

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
