import * as types from './types';
import { dispatch } from 'redux';

export function startLoading() {
	return () => {
		dispatch({
			type: types.START_LOADING
		});
	};
}

export function stopLoading() {
	return () => {
		dispatch({
			type: types.STOP_LOADING
		});
	};
}
