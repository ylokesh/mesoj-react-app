import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Section from '../organisms/Section';
import learn from '../../images/young_scientists.jpg';
import quiz from '../../images/quiz.jpg';
import learningpath from '../../images/learning-path.png';
import boardpaper from '../../images/boardpaper.jpg';

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
	render() {
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
							<a href='/#' className='list-group-item list-group-item-action'>
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
					<div className='col-12 p-5 vh-100'>
						{this.greetUser()}
						<hr className='bg-dark-decnary mb-5' />
						<h3 className='heading-tertiary text-white mb-3'>
							Start Learning
							<span className='fas fa-angle-double-right ml-2 color-brand-base align-middle txt-tertiary' />
						</h3>

						{/* Horizontal Center Alignment */}
						{/* <div className='row pt-5 text-white d-flex justify-content-center'> */}
						<div className='row text-white'>
							<div className='col-sm-6 col-md-3'>
								<div className='card mb-4 shadow-sm'>
									<div className='card-body p-2' href='/#'>
										<div className='card-image overflow-hidden'>
											<img className='img-fluid' src={learn} alt='' />
											<span className='card-cover d-block' />
											<span className='card-icon color-brand-primary mb-3 mt-3 heading-secondary'>Learn</span>
											{/* <span className='fab fa-leanpub card-icon color-brand-primary mb-3 mt-3' /> */}
										</div>
										{/* <span className='card-title heading-tertiary d-block mb-2'>Learn</span> */}
										{/* <span className='d-block txt-tertiary mb-2 color-dark-septnary'>
										Engaging video lessons that help you visualize each concept, making it easier to understand. Clearer concepts
										lead to higher scores.
									</span> */}
										<span className='d-block txt-tertiary mb-2 color-dark-septnary'>
											Engaging video lessons that help you visualize each concept.
										</span>
										<Link className='txt-secondary rounded text-white text-center bg-brand-primary p-2 d-block' to='/learn'>
											Start Your Journey
										</Link>
									</div>
								</div>
							</div>
							<div className='col-sm-6 col-md-3'>
								<div className='card mb-4 shadow-sm'>
									<div className='card-body p-2' href='/#'>
										<div className='card-image overflow-hidden'>
											<img className='img-fluid' src={boardpaper} alt='' />
											<span className='card-cover d-block' />
											<span className='card-icon color-brand-base mb-3 mt-3 heading-secondary'>Practice</span>
											{/* <span className='fas fa-chalkboard-teacher card-icon color-brand-base mb-3 mt-3' /> */}
										</div>
										{/* <span className='card-title heading-tertiary d-block mb-2'>Board Papers</span> */}
										{/* <span className='d-block txt-tertiary mb-2 color-dark-septnary'>
										Practice subject specific board papers from past years and make yourself comfortable with boards examination
										patterns.
									</span> */}
										<span className='d-block txt-tertiary mb-2 color-dark-septnary'>
											Practice subject specific board papers from past years.
										</span>
										<Link className='txt-secondary rounded text-white text-center bg-brand-base p-2 d-block' to='/boardpapers'>
											Start Preparing
										</Link>
									</div>
								</div>
							</div>
							<div className='col-sm-6 col-md-3'>
								<div className='card mb-4 shadow-sm'>
									<div className='card-body p-2' href='/#'>
										<div className='card-image overflow-hidden'>
											<img className='img-fluid' src={quiz} alt='' />
											<span className='card-cover d-block' />
											<span className='card-icon color-brand-secondary mb-3 mt-3 heading-secondary'>Quiz</span>
											{/* <span className='far fa-clock card-icon color-brand-secondary mb-3 mt-3' /> */}
										</div>
										{/* <span className='card-title heading-tertiary d-block mb-2'>Quiz</span> */}
										{/* <span className='d-block txt-tertiary mb-2 color-dark-septnary'>
										Adaptive, interactive quiz that help students master each concepts. Setup your game with unlimited such quiz
										setup only for you.
									</span> */}
										<span className='d-block txt-tertiary mb-2 color-dark-septnary'>
											Adaptive, interactive quiz that help students master each concepts.
										</span>
										<Link className='txt-secondary rounded text-white text-center bg-brand-secondary p-2 d-block' to='/quiz'>
											Test Your Knowledge
										</Link>
									</div>
								</div>
							</div>
							<div className='col-sm-6 col-md-3'>
								<div className='card mb-4 shadow-sm'>
									<div className='card-body p-2' href='/#'>
										<div className='card-image overflow-hidden'>
											<img className='img-fluid' src={learningpath} alt='' />
											<span className='card-cover d-block' />
											<span className='card-icon color-brand-tertiary mb-3 mt-3 heading-secondary'>Path</span>
											{/* <span className='fas fa-bezier-curve card-icon color-brand-tertiary mb-3 mt-3' /> */}
										</div>
										{/* <span className='card-title heading-tertiary d-block mb-2'>Learning Paths</span> */}
										{/* <span className='d-block txt-tertiary mb-2 color-dark-septnary'>
										Every student has a Knowledge Graph based on their learning need. This links different concepts and helps
										students with a path of adaptive learning.
									</span> */}
										<span className='d-block txt-tertiary mb-2 color-dark-septnary'>
											This links different concepts and helps students with a path of adaptive learning.
										</span>
										{/* TODO: New route for coming soon features */}
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
	{}
)(Dashboard);
