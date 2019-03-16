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
import Api from '../../api/Api';

export function loadQuizList(userid, size) {
	// thunk
	return function(dispatch) {
		dispatch({type: 'REQUEST_BEGIN', message: 'Loading Quiz List..'});
		Api.loadQuizList(userid, size)
			.then(response => response.data)
			.then(quizList => {
				dispatch({type: 'REQUEST_FINISH', message: ''});
				dispatch({type: LOAD_QUIZ_LIST, quizList}); // async action
			})
			.catch(error => {
				dispatch({type: 'REQUEST_ERROR', message: 'Error while loading quiz'});
			});
	};
}
export function updateQuizCorrect(value) {
	return function(dispatch) {
		dispatch({type: UPDATE_TOTAL_QUIZ_CORRECT, value});
	};
}
export function updateQuizInCorrect(value) {
	return function(dispatch) {
		dispatch({type: UPDATE_TOTAL_QUIZ_INCORRECT, value});
	};
}
export function updateQuizPercent(value) {
	return function(dispatch) {
		dispatch({type: UPDATE_TOTAL_QUIZ_PERCENT, value});
	};
}
export function updateQuizCount(value) {
	return function(dispatch) {
		dispatch({type: UPDATE_TOTAL_QUIZ_COUNT, value});
	};
}
export function loadQuizResponse(quizid, size) {
	return function(dispatch) {
		dispatch({type: 'REQUEST_BEGIN', message: 'Loading Quiz Response..'});
		Api.loadQuizResponse(quizid, size)
			.then(response => response.data)
			.then(quizResponse => {
				dispatch({type: 'REQUEST_FINISH', message: ''});
				dispatch({type: LOAD_QUIZ_RESPONSE, quizid, quizResponse}); // async action
			});
	};
}
export function loadWeekQuizList(userid, size) {
	return function(dispatch) {
		dispatch({type: 'REQUEST_BEGIN', message: 'Loading Weekly Quiz Report..'});
		Api.loadWeekQuizList(userid, size)
			.then(response => response.data)
			.then(weekQuizList => {
				dispatch({type: 'REQUEST_FINISH', message: ''});
				dispatch({type: LOAD_WEEK_QUIZ_LIST, weekQuizList}); // async action
			});
	};
}
export function loadWeekQuizResponse(weekQuizid, size) {
	return function(dispatch) {
		dispatch({type: 'REQUEST_BEGIN', message: 'Loading Quiz Response..'});
		Api.loadQuizResponse(weekQuizid, size)
			.then(response => response.data)
			.then(weekQuizResponse => {
				dispatch({type: 'REQUEST_FINISH', message: ''});
				dispatch({type: LOAD_WEEK_QUIZ_RESPONSE, weekQuizid, weekQuizResponse}); // async action
			});
	};
}
