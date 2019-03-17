import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {Link} from 'react-router-dom';

import {launchQuiz} from '../../redux/actions/quizAction';

import PropTypes from 'prop-types';
import Question from './Question';

class Quiz extends Component {
  constructor(){
    super();
    this.state = {
      start: false
    }
    this.start = this.start.bind(this);
  }
  start = () => {
    this.setState({start: true})
  }

  componentDidMount() {
		let {actions} = this.props;
    actions.launchQuiz(this.props.match.params.id);
  }

  render() {
    if(this.props.quiz && this.props.quiz.quiz){
      const quiz = this.props.quiz.quiz[0];
      if(!quiz) {
        return (null);
      } 
      let questions = quiz.questions || [];
      return (
        <div className='ms-main'>
          <div className='col-12 p-5 vh-100'>
            <div className="react-quiz-container">
              {!this.state.start &&
                <div>
                  <h2>{quiz.quizTitle}</h2>
                  <div>{questions.length} Questions</div>
                  { quiz.quizSynopsis && 
                      <div className="quiz-synopsis">
                          {quiz.quizSynopsis}
                      </div> 
                  }
                  <div className="startQuizWrapper">
                    <button className='btn button-primary mt-5 startQuizBtn btn' onClick={() => this.start()}>Start Quiz</button>&nbsp;
                    <button className='btn button-primary mt-5' onClick={e => this.props.history.goBack()}>
                    back
                    </button>
                  </div>
                </div>
              }
              {
                this.state.start && <Question questions={questions}/>
              }
            </div>
          </div>
        </div>
      );
    } else {
      return (<div>Quiz not available</div>);
    }
    


  }
}

Quiz.propTypes = {
  quiz: PropTypes.object,
  shuffle: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
  quiz: state.quiz,
})

const mapDispatchToProps = dispatch => ({
  // ... normally is an object full of action creators
  actions: bindActionCreators({ launchQuiz }, dispatch)
})

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connectToStore(Quiz);

//export default Quiz;