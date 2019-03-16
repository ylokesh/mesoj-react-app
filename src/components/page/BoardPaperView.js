import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import {loadBoardData, updateChosenSubject} from '../../redux/actions/boardPaperActions';

class BoardPaper extends Component {
	componentDidMount() {
		let {actions} = this.props;
		actions.loadBoardData(10);
	}
	componentWillUnmount() {}
	renderYearList(subj) {
		this.props.actions.updateChosenSubject(subj);
		this.props.history.push('/showYearPaper');
	}
	renderSubjectList() {
		let {boardPaper} = this.props;
		let reqList = [];
		boardPaper.map(item => {
			return reqList.indexOf(item['subject']) < 0 ? reqList.push(item['subject']) : null;
		});
		return reqList.map((item, idx) => {
			return (
				<div key={idx} className='list-group-item' onClick={e => this.renderYearList(item)}>
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
					<div className='col-12 p-5 vh-100'>{this.renderSubjectList()}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	boardPaper: state.boardPapers.boardPapers,
	subject: state.boardPapers.chosenSubject
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({loadBoardData, updateChosenSubject}, dispatch)
});

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connectToStore(BoardPaper);
