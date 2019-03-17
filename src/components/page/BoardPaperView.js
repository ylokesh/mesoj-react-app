import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import {loadBoardData, updateChosenSubject} from '../../redux/actions/boardPaperActions';
import {updatePageHeading} from '../../redux/actions/commonSectionAction';


class BoardPaper extends Component {
	componentDidMount() {
		let {actions} = this.props;
		//let {standard} = this.props;
		actions.loadBoardData(10);
		actions.updatePageHeading('BoardPapers');
	}
	componentWillUnmount() {}
	renderYearList(subj) {
		this.props.actions.updateChosenSubject(subj);
		this.props.history.push('/boardPapers/showYearPaper');
	}
	renderSubjectList() {
		let {boardPaper} = this.props;
		let reqList = [];
		boardPaper.map(item => {
			return reqList.indexOf(item['subject']) < 0 ? reqList.push(item['subject']) : null;
		});
		return reqList.map((item, idx) => {
			return (
				<div key={idx} className='list-group-item white-sect'>
					<h2 class="uxt-form--label">{item} </h2>
					<button className="button button-primary" onClick={e => this.renderYearList(item)} > START PREPARING </button>
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
					<div className='col-12 p-5 vh-100'>{this.renderSubjectList()}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	boardPaper: state.boardPapers.boardPapers,
	subject: state.boardPapers.chosenSubject,
	standard: state.auth.user.standard,
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({loadBoardData, updateChosenSubject, updatePageHeading}, dispatch)
});

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connectToStore(BoardPaper);
