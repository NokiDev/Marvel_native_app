
import React from "react";
import {AsyncStorage, Text } from 'react-native'
import { connect } from 'react-redux'
import authActions from '@/Redux/actions/auth.actions'
import { Container, Content, Header } from "native-base";
import ApiKeyFormPart from '@/Components/Auth/ApiKeyFormPart'
import MarvelApi from '@/Services/Marvel_API/marvel_api'

class Login extends React.Component {

  _storeData = async (private_api_key, public_api_key) => {
    try {
      await AsyncStorage.setItem('private_api_token', private_api_key)
      await AsyncStorage.setItem('public_api_token', public_api_key)
      this.props.navigation.navigate("Home")
      MarvelApi.set_private_api_key(private_api_key)
      MarvelApi.set_public_api_key(public_api_key)
      return
    } catch (error) {
      // Error saving data
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Header/>
          <Text>{JSON.stringify(this.props)}</Text>
          <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: "column"}}>
            <ApiKeyFormPart api_name="MARVEL API" onSubmit={this.props.OnConnect}/>
          </Container>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onConnect : (private_api_key, public_api_key) => { this._storeData(private_api_key, public_api_key); return dispatch(authActions.connect(private_api_key, public_api_key))}
}}

const mapStateToProps = (state, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Login)
