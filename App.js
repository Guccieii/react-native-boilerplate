import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './src/store/index';
import { View } from 'react-native';
import Main from './src/index';

const { persistor, store } = configureStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={<View style={{ flex: 1, backgroundColor: 'red' }} />} persistor={persistor}>
					<Main />
				</PersistGate>
			</Provider>
		);
	}
}

export default App;
