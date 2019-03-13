import {LOAD_BOARD_PAPERS} from '../actions/types';

const initialState = [];
export default function(state = initialState, action) {
	switch (action.type) {
        case LOAD_BOARD_PAPERS: {
            let { boardPapers } = action.payload;
            return [...boardPapers]
        }
		default:
			return state;
	}
}
