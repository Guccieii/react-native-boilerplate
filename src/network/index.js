import axios from 'axios';

var instance = axios.create();

instance.interceptors.request.use((request) => {
	return request;
});

instance.interceptors.response.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default instance;
