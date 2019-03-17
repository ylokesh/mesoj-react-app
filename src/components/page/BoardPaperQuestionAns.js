import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import {loadBoardData, updateChosenYear} from '../../redux/actions/boardPaperActions';
import {updatePageHeading} from '../../redux/actions/commonSectionAction';

class BoardPaperQuestionAns extends Component {
    constructor () {
        super();
        this.btnText = 'Next';
        this.questnCount = 0;
        this.questionAnsListLength = 0;
    }
    componentDidMount() {
		let {actions} = this.props;
        let {subject} = this.props;
        let {year} = this.props;
		actions.updatePageHeading(subject + ' '+ year +' BoardPapers');
    }
    componentWillUnmount() {
    }
    showNextQuestn(i) {
        this.questnCount = i+1;
        this.forceUpdate();
    }
    showPrevQuestn(i) {
        this.questnCount = i-1;
        this.forceUpdate();
    }
	renderQuestionAnsList() {
        let { boardPaper } = this.props;
        let {subject} = this.props;
        let {year} = this.props;
        let i = this.questnCount;
        let reqList = boardPaper.filter((item) => {
            return (item.subject === subject && item.year === year)
        });
        this.questionAnsListLength = reqList.length;
        return (
            <div className='list-group-item'>
                <ul className='question-ans-holder'>
                    <li className='question-holder'>{reqList[i].question}</li>
                    <li className='ans-holder'>{reqList[i].answer}</li>
                </ul>
                { this.questnCount > 0 ? <button className='button button-primary left-btn' onClick={e => this.showPrevQuestn(i)} > Prev </button> : ''}
                { this.questnCount < this.questionAnsListLength-1 ? <button className='button button-primary' onClick={e => this.showNextQuestn(i)} > Next </button> : ''  }
                           
            </div>
        )
	}
	render() {
        const {boardPaper} = this.props;
        if (boardPaper.length === 0) return '';
		return (
			<div className='row'>
            Question
				<div className='ms-main'>
					<div className='col-12 p-5 vh-100'>{this.renderQuestionAnsList()}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
    boardPaper: state.boardPapers.boardPapers,
    subject: state.boardPapers.chosenSubject,
    year: state.boardPapers.chosenYear
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ loadBoardData, updateChosenYear, updatePageHeading }, dispatch)
})

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(BoardPaperQuestionAns);
