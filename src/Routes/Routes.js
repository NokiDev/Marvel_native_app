import {createSwitchNavigator} from "react-navigation"
import AuthLoading from "~/Views/Auth/AuthLoading"
import AppStack from "./App"
import AuthStack from "./Auth"

const RouteConfigs = {
		AuthLoading: {
				screen: AuthLoading,
		},
		App: {
				screen: AppStack
		},
		Auth: {
				screen: AuthStack
		},
}

const SwitchNavigatorConfig = {
		initialRouteName: "AuthLoading",
		backBehaviour: "none",
		headerMode: "none",
		navigationOptions: {
				headerVisible: false,
		}
}

export default createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig)