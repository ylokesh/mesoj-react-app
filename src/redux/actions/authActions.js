import axios from '../../utils/axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';

import {GET_ERRORS, SET_CURRENT_USER, UPDATE_CURRENT_USER_DETAILS} from './types';

// Register User
export const registeruser = (userData, history) => dispatch => {
	// API CALL
	axios
		.post('/api/users/register', userData)
		.then(res => {
			history.push('/login');
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: (err.response && err.response.data) || {}
			});
		});
};

// Login User - Get Token
export const loginuser = userData => dispatch => {
	axios
		.post('/api/users/login', userData)
		.then(res => {
			if (typeof res.data === 'object') {
				const {token} = res.data;
				localStorage.setItem('jwttoken', token);
				setAuthToken(token);
				const decoded = jwt_decode(token);
				dispatch(setCurrentUser(decoded));
			} else {
				dispatch({
					type: GET_ERRORS,
					payload: {serverError: 'No server is currently avaiable to serve your request. We did not anticipite this takes so long'}
				});
			}
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: (err.response && err.response.data) || {}
			});
		});
};

// Set LoggedIn User
export const setCurrentUser = decoded => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	};
};

// Logout Current User
export const logoutuser = () => dispatch => {
	// Remove Localstorage
	localStorage.removeItem('jwttoken');
	// Remove token from header
	setAuthToken(false);
	// Set Current User
	dispatch(setCurrentUser({}));
};

// Update User Study Standard
export const updateUserStandard = standard => dispatch => {
	axios
		.put('/api/users', {standard: standard})
		.then(res => {
			localStorage.setItem('userstandard', res.data);
			dispatch({
				type: UPDATE_CURRENT_USER_DETAILS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: (err.response && err.response.data) || {}
			});
		});
};
