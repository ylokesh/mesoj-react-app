import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

import {loadQuiz} from '../../redux/actions/quizAction';
import Spinner from '../atoms/Spinner';
import quizThumb from '../../images/quiz.jpg';

class Quizzes extends Component {
	componentDidMount() {
		let {actions} = this.props;
		actions.loadQuiz('elec', 2);
	}

	renderQuiz() {
		let {quiz} = this.props;

		let renderQuizList =
			quiz.quizList.length &&
			quiz.quizList.map((item, idx) => {
				let ref = '/quiz/' + item._id;
				return (
					<div key={idx} className='col-xs-12 col-sm-6 col-md-6 col-lg-3'>
						<div className='card mb-4 shadow-sm'>
							<div className='card-body p-2' href='/#'>
								<div className='card-image overflow-hidden'>
									<img className='img-fluid' src={quizThumb} alt='' />
									<span className='card-cover d-block' />
									<span className='card-icon color-dark-septnary mb-3 mt-3 heading-secondary'>
										{/* {item.quizTitle} */}
										<i class='fas fa-magic' />
									</span>
								</div>
								{/* <span className='d-block txt-tertiary mb-2 color-dark-septnary'>
									Adaptive, interactive quiz that help students master each concepts.
								</span> */}
								<Link className='txt-secondary rounded text-white text-center bg-brand-base p-2 d-block' to={ref}>
									{item.quizTitle}
								</Link>
							</div>
						</div>
					</div>
				);
			});

		let noQuizDataAvailable = <div className='color-brand-primary'>No Quizzes Available.</div>;

		if (quiz.loading) {
			renderQuizList = <Spinner />;
			noQuizDataAvailable = <Spinner />;
		}

		return quiz.quizList.length ? renderQuizList : noQuizDataAvailable;
	}

	render() {
		return (
			<div>
				<div className='ms-quiz'>
					<div className='ms-main'>
						<div className='col-12 p-5 vh-100'>
							<div className='mb-2 color-light-base heading-secondary'>
								<span className='far fa-clock mr-3 color-brand-secondary' />
								<span className='color-brand-base' />
								Quiz
							</div>
							<hr className='bg-dark-decnary mb-5' />
							<div className='row text-white'>{this.renderQuiz()}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	quiz: state.quiz,
	auth: state.auth
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({loadQuiz}, dispatch)
});

const connectToStore = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connectToStore(Quizzes);
