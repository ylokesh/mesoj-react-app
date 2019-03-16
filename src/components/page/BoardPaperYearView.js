import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import {loadBoardData, updateChosenYear} from '../../redux/actions/boardPaperActions';

class BoardPaperYears extends Component {
	componentDidMount() {}
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
				<div key={idx} className='list-group-item' onClick={e => this.renderQuestionAns(item)}>
					{item}
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
	actions: bindActionCreators({loadBoardData, updateChosenYear}, dispatch)
});

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connectToStore(BoardPaperYears);
