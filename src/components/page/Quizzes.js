import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

import {loadQuiz} from '../../redux/actions/quizAction';
import Spinner from '../atoms/Spinner';

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
					<div key={idx} className='list-group-item'>
						<Link className='nav-link' to={ref}>
							{item.quizTitle}
						</Link>
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
								<span className='far fa-clock mr-3' />
								<span className='color-brand-base'>Test</span> Your Knowlegde
							</div>
							<hr className='bg-dark-decnary mb-5' />
							{this.renderQuiz()}
							{/* <hr /> */}
							<button className='btn button-primary mt-5' onClick={e => this.props.history.goBack()}>
								back
							</button>
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
