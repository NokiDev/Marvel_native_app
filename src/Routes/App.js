import {createStackNavigator} from "react-navigation"

import HomeView from "~/Views/HomeView"
import ComicsDetails from "~/Views/ComicsDetails"

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
			headerMode: "none",
			navigationOptions: {
					headerVisible: false,
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
