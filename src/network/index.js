import axios from 'axios';
import Config from 'react-native-config';
import { Alert } from 'react-native';

var instance = axios.create({
	baseURL: Config.BASE_URL,
	timeout: 30000,
});

instance.interceptors.request.use((request) => {
	return request;
});

instance.interceptors.response.use(
	(config) => {
		return config;
	},
	(error) => {
		Alert.alert('Error', JSON.stringify(error.message));
		return error;
	},
);

export default instance;
