import * as types from '../actions/types';

const INIT_STATE = {
	loading: false,
	requestError: null
};

export default function globalReducer(state = INIT_STATE, action) {
	switch (action.type) {
		case types.STOP_LOADING:
			return {
				...state,
				loading: false
			};
		case types.START_LOADING:
			return {
				...state,
				loading: true
			};
		case types.REQUEST_ERROR:
			return {
				...state,
				requestError: action.requestError
			}
		default:
			return state;
	}
}