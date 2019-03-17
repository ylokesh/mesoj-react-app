import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import store from './redux/store';

import asyncComponent from './components/hoc/asyncComponents';

import Nav from './components/molecules/Navbar';
import Landing from './components/page/Landing';
import PrivateRoute from './components/organisms/PrivateRoute';
import Sidebar from './components/organisms/Sidebar';

import {setCurrentUser, logoutuser} from './redux/actions/authActions';
import setAuthToken from './utils/setAuthToken';

// Lazy Load
const asyncLogin = asyncComponent(() => {
	return import('./components/organisms/Login');
});

const asyncSignup = asyncComponent(() => {
	return import('./components/organisms/SignUp');
});

const asyncDashboard = asyncComponent(() => {
	return import('./components/page/Dashboard');
});

const asyncBoardPapers = asyncComponent(() => {
	return import('./components/page/BoardPaperView');
});

const asyncBoardPaperYearView = asyncComponent(() => {
	return import('./components/page/BoardPaperYearView');
});

const asyncBoardPaperQuestionAns = asyncComponent(() => {
	return import('./components/page/BoardPaperQuestionAns');
});

const asyncUserProfile = asyncComponent(() => {
	return import('./components/page/profile/userProfile');
});

const asyncQuizzes = asyncComponent(() => {
	return import('./components/page/Quizzes');
});

const asyncQuiz = asyncComponent(() => {
	return import('./components/page/Quiz');
});

const asyncReportList = asyncComponent(() => {
	return import('./components/page/report/list');
});

if (localStorage.jwttoken) {
	setAuthToken(localStorage.jwttoken);
	const decodedToken = jwt_decode(localStorage.jwttoken);
	store.dispatch(setCurrentUser(decodedToken));
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
					{/* TODO: Create HOC For Layout */}
					<div className='container-fluid ms-app'>
						<Nav />
						<div className='ms-app--content row'>
							<Route exact path='/' component={Landing} />
							<Route exact path='/signup' component={asyncSignup} />
							<Route exact path='/login' component={asyncLogin} />
							<div className='ms-app--main'>
								<Sidebar />
								<Switch>
									<PrivateRoute exact path='/dashboard' component={asyncDashboard} />
									<PrivateRoute exact path='/boardPapers' component={asyncBoardPapers} />
									<PrivateRoute exact path='/boardPapers/showYearPaper' component={asyncBoardPaperYearView} />
									<PrivateRoute exact path='/boardPapers/showQuestionAns' component={asyncBoardPaperQuestionAns} />
									<PrivateRoute exact path='/profile' component={asyncUserProfile} />
									<PrivateRoute exact path='/report' component={asyncReportList} />
									<PrivateRoute exact path='/quiz/:id' component={asyncQuiz} />
									<PrivateRoute exact path='/quizzes' component={asyncQuizzes} />
									{/* <Route component={asyncError} /> */}
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
