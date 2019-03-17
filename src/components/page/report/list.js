import React, {Component} from 'react';
import CardView from './cardView';
import ReportCardView from './reportCardView';
import {loadQuizList} from '../../../redux/actions/report';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class QuizList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tCorrect: 0,
			tIncorrect: 0,
			percentage: 0,
			countQuiz: 0
		};
	}
	componentDidMount() {
		let {actions} = this.props;
		actions.loadQuizList('', 1);
	}

	componentDidUpdate() {}
	updateTotalQuiz(totalQuiz) {
		console.log(totalQuiz);
		console.log(this.state, '-sd-');
	}
	renderQuiz() {
		let {quizList} = this.props;
		debugger;
		if (quizList.length !== 0) {
			return quizList.map((item, idx) => {
				return (
					<div key={idx} className='list-group-item'>
						<CardView item={item} onTotalQuizUpdate={totalQuiz => this.updateTotalQuiz(totalQuiz)} />
					</div>
				);
			});
		}
	}

	render() {
		let {quizData} = this.props;
		let toTalPercentVal = parseInt(quizData.totalQuizPercent / quizData.totalQuizCount).toFixed(2);
		let calculatedVal = {tCorrect: quizData.totalQuizCorrect, tIncorrect: quizData.totalQuizInCorrect, percentage: toTalPercentVal};
		return (
			<div>
				<div className='card'>
					<div className={'card-body whiteCardBox '}>
						Overview
						<ReportCardView item={calculatedVal} />
					</div>
				</div>

				{this.renderQuiz()}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	quizData: state,
	quizList: state.quizList.quizList
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({loadQuizList}, dispatch)
});

const connectToStore = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connectToStore(QuizList);
