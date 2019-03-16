import {SET_CURRENT_USER, UPDATE_CURRENT_USER_DETAILS} from '../actions/types';
import isEmpty from '../../utils/is-empty';
import updateObject from '../../utils/utility';

const initialState = {
	isAuthenticated: false,
	user: {},
	standard: ''
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_USER:
			return updateObject(state, {isAuthenticated: !isEmpty(action.payload), user: action.payload});
		case UPDATE_CURRENT_USER_DETAILS:
			return updateObject(state, {standard: action.payload});
		default:
			return state;
	}
}
