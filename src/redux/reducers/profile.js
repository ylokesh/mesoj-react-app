import {LOAD_USER_PROFILE, UPDATE_USER_PROFILE} from '../constants';

export function profileReducer(state = [], action) {
	switch (action.type) {
		case LOAD_USER_PROFILE:
		case UPDATE_USER_PROFILE: {
			let {userProfile} = action;
			return [...userProfile];
		}
		default:
			return state;
	}
}
