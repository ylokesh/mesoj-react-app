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
			// Save Token to localstorage
			const {token} = res.data;
			// Set Token to Localstorage
			localStorage.setItem('jwttoken', token);
			// Set Token to Auth Header
			setAuthToken(token);
			// Decode Token to get user data
			const decoded = jwt_decode(token);
			// Set current user
			dispatch(setCurrentUser(decoded));
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
