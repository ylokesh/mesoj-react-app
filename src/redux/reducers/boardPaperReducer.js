import {LOAD_BOARD_PAPERS, UPDATE_CHOSEN_SUBJECT} from '../actions/types';

const initialState = {
	boardPapers : [],
	chosenSubject : '',
	chosenYear : '',
};
export default function(state = initialState, action) {
	switch (action.type) {
        case LOAD_BOARD_PAPERS: {
            let { boardPapers } = action.payload;
			return {
				...state,
				boardPapers: action.payload.boardPapers
			};
		}
		case UPDATE_CHOSEN_SUBJECT: {
			return {
				...state,
				chosenSubject: action.payload
			};
		}
		case UPDATE_CHOSEN_YEAR: {
			return {
				...state,
				chosenYear: action.payload
			};
		}
		default:
			return state;
	}
}
