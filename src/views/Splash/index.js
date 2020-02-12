import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CustomInput from './../../components/CustomInput';
import { Translate } from "react-localize-redux";

class Splash extends Component {
	render() {
		return (
			<View style={{ backgroundColor: 'red' }}>
				<Text><Translate id="welcome" /></Text>
				<CustomInput name='email' placeholder='inserisci email' />
			</View>
		);
	}
}

export default Splash;
