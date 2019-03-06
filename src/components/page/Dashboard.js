import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import Section from '../organisms/Section';

// Image Assets
import learn from '../../images/young_scientists.jpg';
import quiz from '../../images/quiz.jpg';
import learningpath from '../../images/learning-path.png';
import boardpaper from '../../images/boardpaper.jpg';
import Select from 'react-select';

// Actions
import {updateUserStandard} from '../../redux/actions/authActions';

class Dashboard extends Component {
	greetUser() {
		const {user} = this.props.auth;

		let thehours = new Date().getHours();
		let greetMessage;

		if (thehours >= 0 && thehours < 12) {
			greetMessage = 'Good Morning';
		} else if (thehours >= 12 && thehours < 17) {
			greetMessage = 'Good Afternoon';
		} else if (thehours >= 17 && thehours < 24) {
			greetMessage = 'Good Evening';
		}

		return (
			<div className='mb-2 color-light-base heading-secondary'>
				<span className='color-brand-base'>{greetMessage} </span> {user.name}, what would you like to do today?
			</div>
		);
	}

	handleChange(event) {
		this.props.updateUserStandard(event.value);
		this.props.history.push('/dashboard');
	}

	render() {
		const {user, standard} = this.props.auth;
		const userStandardChosen = (localStorage.getItem('userstandard') || standard) !== '' ? true : false;

		const standards = [
			{value: '8', label: '8th (VIII)'},
			{value: '9', label: '9th (IX)'},
			{value: '10', label: '10th (X)'},
			{value: '11', label: '11th (XI)'},
			{value: '12', label: '12th (XII)'}
		];
		const selectedOption = 'Choose Standard...';

		const standardDashboard = (
			<div className='ms-student--standard'>
				<div className='mb-2 color-light-base heading-secondary'>
					<span className='color-brand-base mr-1'>Welcome</span>
					<span>{user.name}.</span>
				</div>
				<hr className='bg-dark-decnary mb-4' />
				<p className='color-light-base'>Please choose the standard you are studying in:</p>
				<div className='ms-custom-dropdown'>
					<Select value={selectedOption} onChange={this.handleChange.bind(this)} options={standards} />
				</div>
			</div>
		);

		const getStandardFromUser = (
			<div className='ms-dashbaord'>
				{this.greetUser()}
				<hr className='bg-dark-decnary mb-5' />
				<h3 className='heading-tertiary text-white mb-3'>
					Start Learning
					<span className='fas fa-angle-double-right ml-2 color-brand-base align-middle txt-tertiary' />
				</h3>
				<div className='row text-white'>
					<div className='col-xs-12 col-sm-6 col-md-6 col-lg-3'>
						<div className='card mb-4 shadow-sm'>
							<div className='card-body p-2' href='/#'>
								<div className='card-image overflow-hidden'>
									<img className='img-fluid' src={learn} alt='' />
									<span className='card-cover d-block' />
									<span className='card-icon color-brand-primary mb-3 mt-3 heading-secondary'>Learn</span>
								</div>
								<span className='d-block txt-tertiary mb-2 color-dark-septnary'>
									Engaging video lessons that help you visualize each concept.
								</span>
								<Link className='txt-secondary rounded text-white text-center bg-brand-primary p-2 d-block' to='/learn'>
									Start Your Journey
								</Link>
							</div>
						</div>
					</div>
					<div className='col-xs-12 col-sm-6 col-md-6 col-lg-3'>
						<div className='card mb-4 shadow-sm'>
							<div className='card-body p-2' href='/#'>
								<div className='card-image overflow-hidden'>
									<img className='img-fluid' src={boardpaper} alt='' />
									<span className='card-cover d-block' />
									<span className='card-icon color-brand-base mb-3 mt-3 heading-secondary'>Practice</span>
								</div>
								<span className='d-block txt-tertiary mb-2 color-dark-septnary'>
									Do practice with previous years board papers to prepare well for exams.
								</span>
								<Link className='txt-secondary rounded text-white text-center bg-brand-base p-2 d-block' to='/boardpapers'>
									Start Preparing
								</Link>
							</div>
						</div>
					</div>
					<div className='col-xs-12 col-sm-6 col-md-6 col-lg-3'>
						<div className='card mb-4 shadow-sm'>
							<div className='card-body p-2' href='/#'>
								<div className='card-image overflow-hidden'>
									<img className='img-fluid' src={quiz} alt='' />
									<span className='card-cover d-block' />
									<span className='card-icon color-brand-secondary mb-3 mt-3 heading-secondary'>Quiz</span>
								</div>
								<span className='d-block txt-tertiary mb-2 color-dark-septnary'>
									Adaptive, interactive quiz that help students master each concepts.
								</span>
								<Link className='txt-secondary rounded text-white text-center bg-brand-secondary p-2 d-block' to='/quiz'>
									Test Your Knowledge
								</Link>
							</div>
						</div>
					</div>
					<div className='col-xs-12 col-sm-6 col-md-6 col-lg-3'>
						<div className='card mb-4 shadow-sm'>
							<div className='card-body p-2' href='/#'>
								<div className='card-image overflow-hidden'>
									<img className='img-fluid' src={learningpath} alt='' />
									<span className='card-cover d-block' />
									<span className='card-icon color-brand-tertiary mb-3 mt-3 heading-secondary'>Path</span>
								</div>
								<span className='d-block txt-tertiary mb-2 color-dark-septnary'>
									This links different concepts and helps students with a path of adaptive learning.
								</span>
								<Link className='txt-secondary rounded text-white text-center bg-brand-tertiary p-2 d-block' to='/comingsoon'>
									Coming Soon
								</Link>
							</div>
						</div>
					</div>
				</div>
				<Section
					title='Recent Activities'
					description='A handy log of all your chapters covered, quiz, recent bookmarks will populate here.'
					dataTiles={[]}
				/>
				<Section title='Topics Covered' description='Keep track of all the topics you have started studying!' dataTiles={[]} />
			</div>
		);

		return (
			<div className='row'>
				{/* SideBar */}
				<div className='ms-sidebar'>
					<div className='vh-100 bg-brand-quinary'>
						<div className='list-group list-group-flush'>
							<a href='/#' className='list-group-item list-group-item-action active'>
								<span className='fa fa-home mr-3' />
								Home
							</a>
							<a href='/#' className='list-group-item list-group-item-action'>
								<span className='fa fa-book-open mr-3' />
								Chapters
							</a>
							<a href='/#' className='list-group-item list-group-item-action'>
								<span className='far fa-clock mr-3' />
								Quiz
							</a>
							<a href='/boardPapers' className='list-group-item list-group-item-action'>
								<span className='fas fa-chalkboard mr-3' />
								Board Papers
							</a>
							<a href='/#' className='list-group-item list-group-item-action'>
								<span className='fas fa-bookmark mr-3' />
								Bookmarks
							</a>
						</div>
					</div>
				</div>
				<div className='ms-main'>
					<div className='col-12 p-5 vh-100'>{userStandardChosen ? getStandardFromUser : standardDashboard}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{updateUserStandard}
)(withRouter(Dashboard));
