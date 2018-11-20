import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import {View, Button, Text} from 'react-native'

import {disconnectApi} from "~/Redux/actions/marvelApi.actions"

class MarvelSideBar extends Component {
static propTypes = {
    navigation: PropTypes.object,
    onDisconnect: PropTypes.func,
    public_key : PropTypes.string,
    private_key: PropTypes.string,
}
    render() {
        
        return (
            <View style={{backgroundColor: '#b22222', height: "100%"}}>
                <Button title="Disconnect" onPress={this.props.onDisconnect}/>
                <Text style={{color: "white"}}>Connected with</Text>
                <Text>{this.props.private_key}</Text>
                <Text>{this.props.public_key}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    private_key: state.marvelApiReducers.apiKeys.private,
    public_key: state.marvelApiReducers.apiKeys.public,
})

const mapDispatchToProps = (dispatch, props) => ({
		onDisconnect: () => {
			dispatch(disconnectApi(props.navigation))
		}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MarvelSideBar)