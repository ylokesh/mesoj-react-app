import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import boardPaperReducer from './boardPaperReducer';

import { quizReducer,
    totalQuizCorrectReducer,totalQuizInCorrectReducer,
    totalQuizPercentReducer,totalQuizCountReducer, 
    quizResponseReducer } from './quiz'
import { reqStatusReducer } from './req-status'
import {profileReducer} from "./profile"

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	boardPapers : boardPaperReducer,

	quizList: quizReducer,
    quizResponse: quizResponseReducer,
    reqStatus: reqStatusReducer,
    totalQuizCorrect:totalQuizCorrectReducer,
    totalQuizInCorrect:totalQuizInCorrectReducer,
    totalQuizPercent:totalQuizPercentReducer,
    totalQuizCount:totalQuizCountReducer,
    userProfile:profileReducer	
});
