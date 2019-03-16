import {LOAD_QUIZ, LAUNCH_QUIZ} from '../actions/types';

const initialState = {
	quiz: [],
	quizList: [],
	shuffle: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOAD_QUIZ: {
			let {quizList} = action;
			return [...quizList];
		}
		case LAUNCH_QUIZ: {
			let {quiz} = action;
			//return [...quiz]
			return {quiz: quiz};
		}
		default:
			return state;
	}
}
