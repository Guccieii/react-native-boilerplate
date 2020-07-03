import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class CustomInput extends Component {
	render() {
		const { onPress, text } = this.props;
		return (
			<TouchableOpacity
				onPress={onPress}
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
                    backgroundColor: 'red',
                    borderWidth: 2,
                    borderColor: 'red',
					marginHorizontal: 16,
					height: 48,
					borderRadius: 16,
					marginTop: 16
				}}
			>
				<Text style={{ fontSize: 16 }}>{text}</Text>
			</TouchableOpacity>
		);
	}
}
