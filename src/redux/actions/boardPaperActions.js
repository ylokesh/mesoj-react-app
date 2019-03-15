import axios from 'axios';

import {LOAD_BOARD_PAPERS, UPDATE_CHOSEN_SUBJECT, UPDATE_CHOSEN_YEAR, GET_ERRORS} from './types';

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
export function updateChosenSubject(value){
    return function(dispatch){
        dispatch({type:UPDATE_CHOSEN_SUBJECT, payload: value})
    }
}
export function updateChosenYear(value){
    return function(dispatch){
        dispatch({type:UPDATE_CHOSEN_YEAR, payload: value})
    }
}


