import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import {loadBoardData, updateChosenYear} from '../../redux/actions/boardPaperActions';
import {updatePageHeading} from '../../redux/actions/commonSectionAction';

class BoardPaperYears extends Component {
	componentDidMount() {
		let {actions} = this.props;
		let {subject} = this.props;
		actions.updatePageHeading(subject +' BoardPapers');
	}
	componentWillUnmount() {}
	renderQuestionAns(year) {
		this.props.actions.updateChosenYear(year);
		this.props.history.push('/boardPapers/showQuestionAns');
	}
	renderReqYearList() {
		let {boardPaper} = this.props;
		let {subject} = this.props;
		let reqList = [];
		boardPaper.map(item => {
			return item['subject'] === subject && reqList.indexOf(item['year']) < 0 ? reqList.push(item['year']) : null;
		});
		return reqList.map((item, idx) => {
			return (
				<div key={idx} className='list-group-item  white-sect' onClick={e => this.renderQuestionAns(item)}>
					<div className='index-holder'>{idx + 1}</div>
					<div className='year-holder'>{item}</div>
				</div>
			);
		});
	}
	render() {
		const {boardPaper} = this.props;
		if (boardPaper.length === 0) return '';
		return (
			<div className='row'>
				<div className='ms-main'>
					<div className='col-12 p-5 vh-100'>{this.renderReqYearList()}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	boardPaper: state.boardPapers.boardPapers,
	subject: state.boardPapers.chosenSubject,
	year: state.boardPapers.chosenYear
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({loadBoardData, updateChosenYear, updatePageHeading}, dispatch)
});

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connectToStore(BoardPaperYears);
