import { createStackNavigator } from "react-navigation"
import Login from "@/Views/Auth/Login"
import SignUp from "@/Views/Auth/SignUp"
import ResetPassword from "@/Views/Auth/ResetPassword"

export default createStackNavigator(
	{
		SignIn: {
			screen: Login
		},
		SignUp: {
			screen: SignUp
		},
		ResetPassword: {
			screen: ResetPassword
		}
	},
	{
		initialRouteName: "SignIn",
		headerMode: "none",
		navigationOptions: {
			headerVisible: false,
		}
	}
)
