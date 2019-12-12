import React, { Component } from 'react';
import { View } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';

//Views
import Splash from './views/Splash';

class Main extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Router>
					<Stack key="root" hideNavBar>
						<Scene key="splash" initial={true} component={Splash} />
					</Stack>
				</Router>
			</View>
		);
	}
}

export default Main;
