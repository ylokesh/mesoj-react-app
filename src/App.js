import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import store from './redux/store';
import Nav from './components/molecules/Navbar';
import Landing from './components/page/Landing';
import SignUp from './components/organisms/SignUp';
import Login from './components/organisms/Login';
import Dashboard from './components/page/Dashboard';
import BoardPaper from './components/page/BoardPaperView';
import PrivateRoute from './components/organisms/PrivateRoute';

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
							<Route exact path='/boardPapers' component={BoardPaper} />
							<div className='ms-app--main'>
								{/* TODO: Dashboard route should be protected */}
								<Switch>
									<PrivateRoute exact path='/dashboard' component={Dashboard} />
								</Switch>
							</div>
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
