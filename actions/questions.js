import { RSAA, getJSON } from 'redux-api-middleware';

export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const CLEAR_ANSWERS = 'CLEAR_ANSWERS';

export function loadQuestions() {
  return {
        [RSAA]: {
            endpoint: 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            types: [
                'REQUEST',
                {
                    type: 'SUCCESS',
                    payload: (action, state, res) => getJSON(res)
                },
                'FAILURE'
            ]
        }
    }
}

export function setCurrentQuestion(index) {
    return {
        type: SET_CURRENT_QUESTION,
        index: index
    }
}

export function submitAnswer(isCorrect, index) {
    return {
        type: SUBMIT_ANSWER,
        answeredCorrectly: isCorrect,
        questionIndex: index
    }
}

export function clearAnswers() {
    return {
        type: CLEAR_ANSWERS
    }
}