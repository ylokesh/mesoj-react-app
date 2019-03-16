import React, {Component} from 'react';
import {loadQuizResponse, updateQuizCorrect, updateQuizInCorrect, updateQuizPercent, updateQuizCount} from '../../../redux/actions/quiz';
import ReportCardView from './reportCardView';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ReportCard extends Component {
	componentDidMount() {
		let {item} = this.props;
		let {actions} = this.props;

		actions.updateQuizCorrect(item.tCorrect);
		actions.updateQuizInCorrect(item.tIncorrect);
		actions.updateQuizPercent(item.percentage);
		actions.updateQuizCount();
	}
	render() {
		let {item} = this.props;
		return <ReportCardView item={item} />;
	}
}
const mapStateToProps = state => {
	return {
		state
	};
};
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({loadQuizResponse, updateQuizCorrect, updateQuizInCorrect, updateQuizPercent, updateQuizCount}, dispatch)
});

const connectToStore = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connectToStore(ReportCard);
