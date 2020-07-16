import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = (props) => {
	const { onPress, text } = props;
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
};

export default CustomButton;
