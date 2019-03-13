import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
	quizList: [],
    quizResponse: [],
    weekQuizList: [],
    weekQuizResponse: [],
    totalQuizCorrect:0,
    totalQuizInCorrect:0,
    totalQuizPercent:0,
    totalQuizCount:0
};
const middleware = [thunk];
const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
