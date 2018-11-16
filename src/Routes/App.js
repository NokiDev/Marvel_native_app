import { createStackNavigator } from "react-navigation";

import HomeView from "@/Views/HomeView";

const RootStack = createStackNavigator({
  Home: {
    screen: HomeView
  }
});

export default createStackNavigator(
  {
    Home: RootStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      header: null
    })
  },
  {
    initialRouteName: "Home"
  }
);
