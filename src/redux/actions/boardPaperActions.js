import axios from 'axios';

import {LOAD_BOARD_PAPERS, GET_ERRORS} from './types';

// Register User
export const loadBoardData = (standard) => dispatch => {
	// API CALL
	axios
		.get('/api/boardPapers/standard'+ `/${standard}`)
		.then(res => {
			dispatch({type: LOAD_BOARD_PAPERS, payload: {boardPapers : res.data}});
		})
		.catch(err => {
			dispatch({type: GET_ERRORS, payload: err});
		});
};

