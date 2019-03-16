import {LOAD_QUIZ, LAUNCH_QUIZ} from '../actions/types';
import updateObject from '../../utils/utility';

const initialState = {
	quiz: [],
	quizList: [],
	shuffle: false,
	loading: true
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOAD_QUIZ: {
			let quizCategories = [...initialState.quizList, ...action.quizList];
			return updateObject(state, {quizList: quizCategories, loading: false});
		}
		case LAUNCH_QUIZ: {
			let {quiz} = action;
			return updateObject(state, {quiz: quiz});
		}
		default:
			return state;
	}
}
