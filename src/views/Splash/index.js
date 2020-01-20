import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

class Splash extends Component {
	render() {
		return (
			<SafeAreaView style={{backgroundColor: 'red'}}>
				<Text>Welcome</Text>
			</SafeAreaView>
		);
	}
}

export default Splash;
