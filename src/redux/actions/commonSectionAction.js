import {UPDATE_PAGE_HEADING} from './types';

export function updatePageHeading(value) {
	return function(dispatch) {
		dispatch({type: UPDATE_PAGE_HEADING, payload: value});
	};
}