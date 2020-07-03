import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CustomInput from './../../components/CustomInput';
import { Translate } from 'react-localize-redux';

class Splash extends Component {
	render() {
		return (
			<View style={{ backgroundColor: 'white', flex: 1 }}>
				<Text>
					<Translate id="welcome" />
				</Text>
				<CustomInput label="email" type="email" placeholder="inserisci email" />
				<CustomInput label="password" type="password" placeholder="inserisci password" />
			</View>
		);
	}
}

export default Splash;
