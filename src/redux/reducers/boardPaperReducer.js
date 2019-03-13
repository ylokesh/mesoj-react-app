import {LOAD_BOARD_PAPERS} from '../actions/types';


export default function(state = [], action) {
	switch (action.type) {
        case LOAD_BOARD_PAPERS: {
            let { boardPapers } = action
            return [...boardpapers]
        }
		default:
			return state;
	}
}
