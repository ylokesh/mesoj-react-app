import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Section from '../organisms/Section';

// Actions
import {loadBoardData} from '../../redux/actions/boardPaperActions';

class BoardPaper extends Component {

    componentDidMount() {
        let { actions } = this.props;
        actions.loadBoardData(10);
        //this.setState
    }
    componentWillUnmount() {
    }

	renderSubjectList() {
		let { boardPaper } = this.props;
		console.log(boardPaper);
        return boardPaper.map((item, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    
                </div>
            )
        });
	}
	render() {
        const {boardPaper} = this.props;
        if (!boardPaper) return '';
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
    boardPaper: state.boardPapers,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ loadBoardData }, dispatch)
})

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(BoardPaper);
