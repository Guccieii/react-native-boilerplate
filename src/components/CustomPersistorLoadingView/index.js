import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CustomPersistorLoadingView extends Component {
	render() {
		return (
			<View style={{flex: 1, backgroundColor: 'red'}}>
				<Text>CustomPersistorLoadingView</Text>
			</View>
		);
	}
}

export default CustomPersistorLoadingView;
