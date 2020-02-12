import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Router, Stack, Scene, Tabs } from 'react-native-router-flux';

//Localizations
import { withLocalize } from 'react-localize-redux';
import globalTranslations from './utils/translations.json';
import * as RNLocalize from 'react-native-localize';

//Views
import Splash from './views/Splash';
import CustomTabBar from './components/CustomTabBar';

class Main extends Component {
	constructor(props) {
		super(props);

		//Localizations init
		this.props.initialize({
			languages: [ { name: 'English', code: 'US' }, { name: 'Italian', code: 'IT' } ],
			translation: globalTranslations,
			options: { renderToStaticMarkup: false }
		});

		//Check if the device languages is supported and change the app language, or use English
		var deviceLang = 'US';
		switch (RNLocalize.getCountry()) {
			case 'US': deviceLang = 'US'; break;
			case 'IT': deviceLang = 'IT'; break;
			default: deviceLang = 'US'; break;
		}
		this.props.setActiveLanguage(deviceLang)
	}

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

export default withLocalize(Main);
