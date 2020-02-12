import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './src/store/index';
import Main from './src/index';
import { LocalizeProvider } from 'react-localize-redux';
import CustomPersistorLoadingView from './src/components/CustomPersistorLoadingView';

const { persistor, store } = configureStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={<CustomPersistorLoadingView />} persistor={persistor}>
					<LocalizeProvider>
						<Main />
					</LocalizeProvider>
				</PersistGate>
			</Provider>
		);
	}
}

export default App;
