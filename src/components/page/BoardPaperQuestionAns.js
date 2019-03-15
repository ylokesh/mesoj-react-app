import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import {loadBoardData, updateChosenYear} from '../../redux/actions/boardPaperActions';

class BoardPaperQuestionAns extends Component {

    componentDidMount() {
    }
    componentWillUnmount() {
    }
	renderQuestionAnsList() {
        let { boardPaper } = this.props;
        let {subject} = this.props;
        let {year} = this.props;
        let reqList = boardPaper.filter((item) => {
            return (item.subject === subject && item.year === year)
        });
        return reqList.map((item, idx) => {
            return (
                <div  key={idx} className="list-group-item">
                    <ul>
                        <li>{item.question}</li>
                        <li>{item.answer}</li>
                    </ul>
                </div>
            )
        });
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
