import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Router, Stack, Scene, Tabs } from 'react-native-router-flux';

//Views
import Splash from './views/Splash';
import CustomTabBar from './components/CustomTabBar';

class Main extends Component {
	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<Router>
					<Stack key="root" hideNavBar>
						<Scene key="splash" component={Splash} />
						<Tabs key="tabs" initial tabBarComponent={CustomTabBar}>
							<Scene key="splash1" title="Ciao" component={Splash} hideNavBar />
							<Scene key="splash2" title="Ciao2" component={Splash} hideNavBar />
						</Tabs>
					</Stack>
				</Router>
			</SafeAreaView>
		);
	}
}

export default Main;
