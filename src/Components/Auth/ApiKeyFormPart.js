
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Item, Input, Content, H1} from 'native-base';
import { Text } from 'react-native'
import Spacer from '@/Components/Spacer'

export default class ApiKeyFormPart extends React.Component {
static propTypes = {
    api_name: PropTypes.string,
    onSubmit: PropTypes.func
}

    constructor(props) {
        super(props)
        this.state = {
            private_api_key : '',
            public_api_key : ''
        }
    }

    render() {
        return (
        <Content>
            <H1 style={{textAlign: "center"}}>Connect to {this.props.api_name}</H1>
            <Spacer height={20}/>
            <Item regular>
                <Input onChangeText={(text) => {
                  this.setState({
                    private_api_key : text
                  })
                }} placeholder={`Enter Api Key`}/>
            </Item>
            <Item regular>
                <Input onChangeText={(text) => {
                  this.setState({
                    public_api_key : text
                  })
                }} placeholder={`Enter Api Key`}/>
            </Item>
            <Spacer height={10}/>
            <Button disabled={this.state.public_api_key === '' || this.state.private_api_key === ''} block onPress={() => {this.props.onSubmit(this.state.private_api_key, this.state.public_api_key)}}>
                <Text style={{color: "white"}}>
                    Confirm
                </Text>
            </Button>
        </Content>
        )
    }
}
