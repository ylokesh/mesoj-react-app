import axios from 'axios';

import {GET_ERRORS} from './types';

// Register User
export const loadBoardData = (standard) => dispatch => {
	// API CALL
	axios
		.get('/api/boardPapers/standard'+ `/${standard}`)
		.then(res => {
			dispatch({payload: res.data});
		})
		.catch(err => {
			dispatch({type: GET_ERRORS, payload: err});
		});
};

