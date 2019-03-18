import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import {loadBoardData, updateChosenSubject} from '../../redux/actions/boardPaperActions';
import {updatePageHeading} from '../../redux/actions/commonSectionAction';
import boardpaper from '../../images/boardpaper.jpg';

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
				<div key={idx} className='col-xs-12 col-sm-6 col-md-6 col-lg-3'>
					<div className='card mb-4 shadow-sm'>
						<div className='card-body p-2' href='/#'>
							<div className='card-image overflow-hidden'>
								<img className='img-fluid' src={boardpaper} alt='' />
								<span className='card-cover d-block' />
								<span className='card-icon color-dark-septnary mb-3 mt-3 heading-secondary'>{item}</span>
							</div>
							<button className='btn btn-block button button-primary' onClick={e => this.renderYearList(item)}>
								{' '}
								START PREPARING{' '}
							</button>
						</div>
					</div>
				</div>
			);
		});
	}
	render() {
		let standard = 10;
		//let {standard} = this.props;
		const {boardPaper} = this.props;
		if (standard !== 10 && standard !== 12)
			return (
				<div className='ms-main ms-paper'>
					<div className='col-12 p-5 vh-100 light-text'>
						<div className='mb-2 color-light-base heading-secondary'>
							<span className='far fa-clock mr-3 color-brand-secondary ms-theme--icon' />
							<span className='color-brand-base' />
							Quiz
						</div>
						<p className='color-light-base'>
							Motivate students and reclaim your time. Free self-paced quizzes to review, assess, and engage—in class and at home.
						</p>
						<hr className='bg-dark-decnary mb-5' />
						<div className='row text-white'>No Relevant Data</div>
					</div>
				</div>
			);
		if (boardPaper.length === 0) return '';
		return (
			<div className='ms-main ms-paper'>
				<div className='col-12 p-5 vh-100 light-text'>
					<div className='mb-2 color-brand-base heading-secondary'>
						<span className='fas fa-chalkboard mr-3 color-brand-base ms-theme--icon' />
						<span className='color-brand-base' />
						Board Papers
					</div>

					<p className='color-light-base pr-5 w-90'>
						Don't scratch your head for not able to solve questions for board examination questions. Start practicing CBSE sample paper.
					</p>

					<hr className='bg-dark-decnary mb-5' />
					<div className='row text-white'>{this.renderSubjectList()}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	boardPaper: state.boardPapers.boardPapers,
	subject: state.boardPapers.chosenSubject,
	standard: state.auth.user.standard
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
