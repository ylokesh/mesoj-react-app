import {UPDATE_PAGE_HEADING} from '../actions/types';
import updateObject from '../../utils/utility';

const initialState = {
	pageHeading: ''
};
export default function(state = initialState, action) {
	switch (action.type) {
		case UPDATE_PAGE_HEADING: {
			return updateObject(state, {pageHeading: action.payload});
		}
		default:
			return state;
	}
}
