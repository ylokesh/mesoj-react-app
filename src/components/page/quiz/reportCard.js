
import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import { loadQuizResponse,updateQuizCorrect,
    updateQuizInCorrect,
    updateQuizPercent,
    updateQuizCount } from '../../../redux/actions/quiz'
import ReportCardView from './reportCardView'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ReportCard extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let { item } = this.props;
        let { actions } = this.props;
        
        actions.updateQuizCorrect(item.tCorrect);
        actions.updateQuizInCorrect(item.tIncorrect);
        actions.updateQuizPercent(item.percentage);
        actions.updateQuizCount();
    }
    render() {
        let { item, actions } = this.props;
        return (
            <ReportCardView item={item}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      state
    }
  }
const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    actions: bindActionCreators({ loadQuizResponse,
        updateQuizCorrect,
        updateQuizInCorrect,
        updateQuizPercent,
        updateQuizCount}, dispatch)
})

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(ReportCard);