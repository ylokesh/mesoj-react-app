import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

import {loadQuiz} from '../../redux/actions/quizAction';

class Quizzes extends Component {
	componentDidMount() {
		let {actions} = this.props;
		actions.loadQuiz('elec', 2);
	}

	renderQuiz() {
		let {quiz} = this.props;
		return quiz.length ? (
			quiz.map((item, idx) => {
				let ref = '/quiz/' + item._id;
				return (
					<div key={idx} className='list-group-item'>
						<Link className='nav-link' to={ref}>
							{item.quizTitle}
						</Link>
					</div>
				);
			})
		) : (
			<div className='color-brand-primary'>No Quizzes Available.</div>
		);
	}

	render() {
		return (
			<div>
				<div className=''>
					<div className='ms-main'>
						<div className='col-12 p-5 vh-100'>
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
	quiz: state.quiz
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({loadQuiz}, dispatch)
});

const connectToStore = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connectToStore(Quizzes);
