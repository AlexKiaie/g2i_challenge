import { combineReducers } from 'redux';
import { SET_CURRENT_QUESTION, SUBMIT_ANSWER, CLEAR_ANSWERS } from '../actions/questions';

function questions(state = {}, action) {
    switch(action.type) {
        case 'REQUEST':
            return Object.assign({}, state[action.id], {
                isFetching: true,
                isError: false
            });
        case 'SUCCESS':
            return Object.assign({}, state[action.id], {
                isFetching: false,
                isError: false,
                items: action.payload.results
          });
        case 'FAILURE':
            console.log('ERROR');
            console.log(action)
            return Object.assign({}, state[action.id], {
                isFetching: false,
                isError: true
            });
        default:
            return state;
    }
}

function currentQuestionIndex(state = 0, action) {
    switch(action.type) {
        case SET_CURRENT_QUESTION:
            return action.index;
        default:
            return state;
    }
}

function userResults(state = {}, action) {
    switch(action.type) {
        case SUBMIT_ANSWER:
            state[action.questionIndex] = action.answeredCorrectly
            break;
        case CLEAR_ANSWERS:
            state = {};
            break;
    }
    return state;
}

export default questions = combineReducers({
    questions: questions,
    currentQuestion: currentQuestionIndex,
    userResults: userResults
});