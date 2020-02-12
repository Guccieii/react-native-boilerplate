import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class CustomInput extends Component {
	render() {
		const { name, placeholder } = this.props;

		return (
			<View style={{ backgroundColor: 'yellow' }}>
				<Text>{name}</Text>
				<TextInput placeholder={placeholder} />
				<Text>Errore!</Text>
			</View>
		);
	}
}

export default CustomInput;
