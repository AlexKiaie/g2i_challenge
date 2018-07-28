import React, { Component } from 'react';
import { View, Text } from 'react-native';

import QuestionForm from '../../components/questionForm';

class QuestionContainer extends Component {
  constructor(props){
    super(props);
    const { loadQuestions } = this.props;
    loadQuestions();
  }

  render() {
    const { nextQuestion, currentQuestion, index, submitAnswer, quizCompleteCallback, quizLength } = this.props;
    const isLast = index + 1 === quizLength;
    const progressMessage = index + 1 + " of " + quizLength;

    if(!!currentQuestion) {
      return (
        <QuestionForm 
          currentQuestion={currentQuestion} 
          submit={(value) => { 
            submitAnswer(currentQuestion.correct_answer == value, index);
            if (isLast) {
              quizCompleteCallback();
            }
            else {
              nextQuestion(index+1);
            }
          }}
          isLastQuestion={isLast}
          progressMessage={progressMessage} />
      )
    }
    return <View><Text>Loading...</Text></View>
  }
}

export default QuestionContainer;
