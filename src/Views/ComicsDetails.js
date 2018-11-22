import React, {Component} from "react"
import PropTypes from "prop-types"

import {View} from "react-native"

class ComicsDetails extends Component {
		static propTypes = {
				navigation: PropTypes.object
		}
		
		constructor(props) {
				super(props)
				this.state = {
						comic: this.props.navigation.getParam("details")
				}
		}
		
		componentDidMount() {
		}
		
		componentWillUnmount() {
		}
		
		render() {
				return (
					<View>
					
					</View>
				)
		}
}


export default ComicsDetails