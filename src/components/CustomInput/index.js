import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

class CustomInput extends Component {
	constructor(props) {
		super(props);

		this.state = { error: true, value: '' };
	}
	render() {
		const { label, placeholder, type, showLabel = true } = this.props;
		const { error } = this.state;

		return (
			<View style={{ backgroundColor: 'white', marginHorizontal: 16, marginTop: 8 }}>
				<Text style={{ fontSize: 16, paddingHorizontal: 8 }}>{showLabel ? label : ''}</Text>
				<TextInput
					placeholder={placeholder}
					style={{
						borderBottomWidth: 2,
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
		const { onChangeField, label } = this.props;
		const { error } = this.state;

		if (text == '') {
			this.setState({ error: true, value: text }, () => {
				onChangeField(text, label, error);
			});
		} else {
			switch (type) {
				case 'email':
					if (emailRegex.test(text)) {
						this.setState({ error: false, value: text }, () => {
							onChangeField(text, label, error);
						});
					} else {
						this.setState({ error: true, value: text }, () => {
							onChangeField(text, label, error);
						});
					}
					break;
				case 'phone':
					if (phoneRegex.test(text)) {
						this.setState({ error: false, value: text }, () => {
							onChangeField(text, label, error);
						});
					} else {
						this.setState({ error: true, value: text }, () => {
							onChangeField(text, label, error);
						});
					}
					break;
				default:
					this.setState({ error: false, value: text }, () => {
						onChangeField(text, label, error);
					});
					break;
			}
		}
	}
}

export default CustomInput;
