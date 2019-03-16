import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];
console.log(process.env.NODE_ENV);
const store = createStore(
	rootReducer,
	{},
	process.env.NODE_ENV === 'development'
		? compose(
				applyMiddleware(...middleware),
				window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		  )
		: compose(applyMiddleware(...middleware))
);

export default store;
