import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import boardPaperReducer from './boardPaperReducer';

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	boardPapers : boardPaperReducer,

});
