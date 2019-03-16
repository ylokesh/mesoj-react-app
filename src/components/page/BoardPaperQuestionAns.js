import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import {loadBoardData, updateChosenYear} from '../../redux/actions/boardPaperActions';

class BoardPaperQuestionAns extends Component {
    constructor () {
        super();
        this.btnText = 'Next';
        this.questnCount = 0;
        this.questionAnsListLength = 0;
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    showNextQuestn(i) {
        if(this.questionAnsListLength-1 > i) {
            this.questnCount = i+1;
        }
        else{
            this.btnText = 'Finish';
        }
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
        //return reqList.map((item, idx) => {
            return (
                <div className="list-group-item">
                    <ul>
                        <li>{reqList[i].question}</li>
                        <li>{reqList[i].answer}</li>
                    </ul>
                    <button className="btn btn-primary" onClick={e => this.showNextQuestn(i)} > {this.btnText} </button>
                </div>
            )
        //});
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
    actions: bindActionCreators({ loadBoardData, updateChosenYear }, dispatch)
})

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(BoardPaperQuestionAns);
