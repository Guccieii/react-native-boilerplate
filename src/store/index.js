import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './../reducers';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
	let store = createStore(persistedReducer, compose(applyMiddleware(thunkMiddleware)));
	let persistor = persistStore(store);
	return { store, persistor };
};
