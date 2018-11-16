import { createSwitchNavigator } from "react-navigation";
import AppStack from "./App";
import AuthStack from "./Auth";
import AuthLoading from "@/Views/Auth/AuthLoading";

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  {
    initialRouteName: "AuthLoading",
    backBehaviour: "none"
  }
);
