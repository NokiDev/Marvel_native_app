import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from "react-native";

import MarvelApi from '@/Services/Marvel_API/marvel_api'

export default class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    console.log("Test2")
    const userToken = await AsyncStorage.getItem("api_token");
    console.log(userToken)
    /// Api key is found
    if(userToken) {
        MarvelApi.set_api_key(
            userToken
        )
        this.props.navigation.navigate("App");
    }
    else {
      this.props.navigation.navigate("Auth");
    }
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
