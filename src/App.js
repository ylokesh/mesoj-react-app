import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './App.css';
import store from './redux/store';

import Nav from './components/molecules/Navbar';
import Landing from './components/page/Landing';
import SignUp from './components/organisms/SignUp';
import Login from './components/organisms/Login';
import Dashboard from './components/page/Dashboard';
import BoardPaper from './components/page/BoardPaperView';
import BoardPaperYears from './components/page/BoardPaperYearView';
import BoardPaperQuestionAns from './components/page/BoardPaperQuestionAns';
import PrivateRoute from './components/organisms/PrivateRoute';
import Report from './components/page/report/list';
import UserProfile from './components/page/profile/userProfile';
import ErrorPage from './components/page/Error';
import Sidebar from './components/organisms/Sidebar';
import Quizzes from './components/page/Quizzes'; //for quiz list
import Quiz from './components/page/Quiz';

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
						<div className='ms-app--content row'>
							<Route exact path='/' component={Landing} />
							<Route exact path='/signup' component={SignUp} />
							<Route exact path='/login' component={Login} />
							<div className='ms-app--main'>
								<Sidebar />
								<Switch>
									<PrivateRoute exact path='/dashboard' component={Dashboard} />
									<PrivateRoute exact path='/boardPapers' component={BoardPaper} />
									<PrivateRoute exact path='/boardPapers/showYearPaper' component={BoardPaperYears} />
									<PrivateRoute exact path='/boardPapers/showQuestionAns' component={BoardPaperQuestionAns} />
									<PrivateRoute exact path='/profile' component={UserProfile} />
									<PrivateRoute exact path='/report' component={Report} />
									<PrivateRoute exact path='/quiz/:id' component={Quiz} />
									<PrivateRoute exact path='/quizzes' component={Quizzes} />
									<Route component={ErrorPage} />
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
