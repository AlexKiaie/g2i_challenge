import QuestionContainer from './questionContainer'
import { connect } from 'react-redux';

import { loadQuestions, setCurrentQuestion, submitAnswer } from '../../actions/questions';
import { getCurrentQuestion, getQuestionCount } from "../../selectors";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadQuestions: () => dispatch(loadQuestions()),
    nextQuestion: index => dispatch(setCurrentQuestion(index)),
    submitAnswer: (isCorrect, index) => dispatch(submitAnswer(isCorrect, index))
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentQuestion: getCurrentQuestion(state),
    index: state.currentQuestion,
    quizLength: getQuestionCount(state)
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(QuestionContainer);
