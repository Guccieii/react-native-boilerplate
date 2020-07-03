import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class CustomInput extends Component {
	constructor(props) {
		super(props);

		this.state = { error: true };
	}
	render() {
		const { label, placeholder, type } = this.props;
		const { error } = this.state;

		return (
			<View style={{ backgroundColor: 'white', marginHorizontal: 16, marginTop: 8 }}>
				<Text style={{ fontSize: 16, paddingHorizontal: 8 }}>{label}</Text>
				<TextInput
					placeholder={placeholder}
					style={{
						borderWidth: 2,
						borderRadius: 8,
						fontSize: 16,
						paddingHorizontal: 8,
						borderColor: error ? 'orangered' : 'black'
					}}
					secureTextEntry={type == 'password' ? true : false}
					onChangeText={(text) => this.handleChangeText(text, type)}
					keyboardType={this.setKeyboardType(type)}
				/>
			</View>
		);
	}

	//Show the appropriate keyboard according to the type
	setKeyboardType(type) {
		switch (type) {
			case 'email':
				return 'email-address';
			case 'phone':
				return 'phone-pad';
			case 'numeric':
				return 'numeric';
			default:
				return 'default';
		}
	}

	handleChangeText(text, type) {
		if (text == '') {
			this.setState({ error: true });
		}
	}
}

export default CustomInput;
