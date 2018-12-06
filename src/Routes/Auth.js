import {createStackNavigator} from "react-navigation"
import Login from "~/Views/Auth/Login"

export default createStackNavigator (
	{
		SignIn: {
			screen: Login
		}
	},
	{
		initialRouteName  : "SignIn",
		headerMode        : "none",
		navigationOptions : {
			headerVisible : false
		}
	}
)
