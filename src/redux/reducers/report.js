import {
	LOAD_QUIZ_LIST,
	LOAD_QUIZ_RESPONSE,
	LOAD_WEEK_QUIZ_LIST,
	LOAD_WEEK_QUIZ_RESPONSE,
	UPDATE_TOTAL_QUIZ_CORRECT,
	UPDATE_TOTAL_QUIZ_INCORRECT,
	UPDATE_TOTAL_QUIZ_PERCENT,
	UPDATE_TOTAL_QUIZ_COUNT
} from '../constants';

import updateObject from '../../utils/utility';

const initialState = {
	quizList: [],
	quizResponse: [],
	weekQuizList: [],
	weekQuizResponse: [],
	totalQuizCorrect: 0,
	totalQuizInCorrect: 0,
	totalQuizPercent: 0,
	totalQuizCount: 0
};

export function reportReducer(state = initialState, action) {
	// console.log("-quiz-reducer-");
	switch (action.type) {
		case LOAD_QUIZ_LIST: {
			let {quizList} = action;
			return [...quizList];
		}
		default:
			return state;
	}
}
export function weekQuizReducer(state = initialState, action) {
	switch (action.type) {
		case LOAD_WEEK_QUIZ_LIST: {
			let {weekQuizList} = action;
			return [...weekQuizList];
		}
		default:
			return state;
	}
}
export function totalQuizCorrectReducer(state = 0, action) {
	switch (action.type) {
		case UPDATE_TOTAL_QUIZ_CORRECT: {
			let {value} = action;
			return state + value;
		}
		default:
			return state;
	}
}
export function totalQuizInCorrectReducer(state = 0, action) {
	switch (action.type) {
		case UPDATE_TOTAL_QUIZ_INCORRECT: {
			let {value} = action;
			return state + value;
		}
		default:
			return state;
	}
}
export function totalQuizPercentReducer(state = 0, action) {
	switch (action.type) {
		case UPDATE_TOTAL_QUIZ_PERCENT: {
			let {value} = action;
			return state + value;
		}
		default:
			return state;
	}
}
export function totalQuizCountReducer(state = 0, action) {
	switch (action.type) {
		case UPDATE_TOTAL_QUIZ_COUNT: {
			return (state += 1);
		}
		default:
			return state;
	}
}

export function quizResponseReducer(state = initialState, action) {
	switch (action.type) {
		case LOAD_QUIZ_RESPONSE: {
			let {quizid, quizResponse} = action;
			quizResponse = [...quizResponse];
			return updateObject(state, {[quizid]: quizResponse});
		}
		default:
			return state;
	}
}
export function weekQuizResponseReducer(state = initialState, action) {
	switch (action.type) {
		case LOAD_WEEK_QUIZ_RESPONSE: {
			let {weekQuizid, weekQuizResponse} = action;
			let existingResponse = state[weekQuizid] || [];
			weekQuizResponse = [...existingResponse, ...weekQuizResponse];
			return updateObject(state, {[weekQuizid]: weekQuizResponse});
		}
		default:
			return state;
	}
}
