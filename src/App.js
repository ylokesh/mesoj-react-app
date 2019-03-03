import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import store from './redux/store';
import Nav from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import SignUp from './components/organisms/SignUp';
import Login from './components/organisms/Login';
import Dashboard from './components/page/Dashboard';

import {setCurrentUser, logoutuser} from './redux/actions/authActions';
import setAuthToken from './utils/setAuthToken';

if (localStorage.jwttoken) {
	// set auth token
	setAuthToken(localStorage.jwttoken);
	// Decode the token
	const decodedToken = jwt_decode(localStorage.jwttoken);
	// Set current user
	store.dispatch(setCurrentUser(decodedToken));
	// Check expired token
	const currentTime = Date.now() / 1000;
	if (decodedToken.exp < currentTime) {
		store.dispatch(logoutuser());
		window.location.href = '/login';
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className='container-fluid ms-app'>
						<Nav />
						<div className='ms-app--content'>
							<Route exact path='/' component={Landing} />
							<Route exact path='/signup' component={SignUp} />
							<Route exact path='/login' component={Login} />
							<div className='ms-app--main'>
								<Route exact path='/dashboard' component={Dashboard} />
							</div>
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
