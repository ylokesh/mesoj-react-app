import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import boardPaperReducer from './boardPaperReducer';
import quizReducer from './quizReducer';
import learnReducer from './learnReducer';
import commonSectionReducer from './commonSectionReducer';

import {
	reportReducer,
	totalQuizCorrectReducer,
	totalQuizInCorrectReducer,
	totalQuizPercentReducer,
	totalQuizCountReducer,
	quizResponseReducer
} from './report';
import { reqStatusReducer } from './req-status';
import { profileReducer } from './profile';

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	boardPapers: boardPaperReducer,
	quizList: reportReducer,
	quizResponse: quizResponseReducer,
	reqStatus: reqStatusReducer,
	totalQuizCorrect: totalQuizCorrectReducer,
	totalQuizInCorrect: totalQuizInCorrectReducer,
	totalQuizPercent: totalQuizPercentReducer,
	totalQuizCount: totalQuizCountReducer,
	userProfile: profileReducer,
	quiz: quizReducer,
	learn: learnReducer,
	commonSection: commonSectionReducer
});
