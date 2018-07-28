import ResultsContainer from './resultsContainer'
import { connect } from 'react-redux';

import { clearAnswers, setCurrentQuestion } from '../../actions/questions';
import { countUserScore, getAllQuestions } from "../../selectors";

const mapDispatchToProps = (dispatch, ownProps) => { 
    return {
        resetQuiz: () => {
            dispatch(clearAnswers());
            dispatch(setCurrentQuestion(0));
        }
    }
};

const mapStateToProps = (state, ownProps) => {
  return {
      userScore: countUserScore(state),
      questions: getAllQuestions(state),
      results: state.userResults
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ResultsContainer);
