export const getAllQuestions = state => {
    if (areQuestionsLoaded(state)) {
        return state.questions.items;
    }
    return null;
}

export const getCurrentQuestion = state => {
    if (areQuestionsLoaded(state)) {
        return state.questions.items[state.currentQuestion];
    }
    return null;
}

export const getQuestionCount = state => {
    if (areQuestionsLoaded(state)) {
        return state.questions.items.length;
    }
    return -1;
}

export const countUserScore = state => {
    return Object.values(state.userResults).reduce((total, val) => { return total + (val ? 1 : 0); })
}

function areQuestionsLoaded(state) {
    return !!state.questions && Object.keys(state.questions)
        && !state.questions.isError && !state.questions.isFetching
        && !!state.questions.items;
}