import React, {Component} from 'react';

import 'react-circular-progressbar/dist/styles.css';

import ReportCard from './reportCard';
import {loadQuizResponse} from '../../../redux/actions/report';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class CardView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTab: 1
		};
	}
	componentDidMount() {
		let {item, actions} = this.props;
		actions.loadQuizResponse(item.id);
	}
	componentWillUnmount() {}
	componentDidUpdate() {}
	renderQuizResponse() {
		let {item, quizResponse, onTotalQuizUpdate} = this.props;
		let totalCorrect = 0;
		let totalInCorrect = 0;
		if (quizResponse.length !== 0) {
			quizResponse.map((item, idx) => {
				return item.is_correct ? totalCorrect++ : totalInCorrect++;
			});
			let percentVal = (totalCorrect / item.max_question) * 100;
			let calculatedVal = {tCorrect: totalCorrect, tIncorrect: totalInCorrect, percentage: percentVal};
			if (onTotalQuizUpdate) {
				onTotalQuizUpdate(calculatedVal);
			}
			return <ReportCard item={calculatedVal} />;
		}
	}
	calculateQuizResponse() {}
	render() {
		let {item} = this.props;
		return (
			<div className='card'>
				<div className={'card-body blueCardBox'}>
					{item.quiz_title}
					{this.renderQuizResponse()}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	// ... computed data from state and optionally ownProps

	quizResponse: state.quizResponse[ownProps.item.id] || [],
	reqStatus: state.reqStatus
});

const mapDispatchToProps = dispatch => ({
	// ... normally is an object full of action creators
	actions: bindActionCreators({loadQuizResponse}, dispatch)
});

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connectToStore(CardView);
