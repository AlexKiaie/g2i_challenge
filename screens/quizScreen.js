import React from 'react';
import { View, StyleSheet } from 'react-native';

import styles from '../constants/styles';
import QuestionContainer from '../containers/questionsContainer';

export default class QuizScreen extends React.Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create(styles.quizScreen);
  }

  render() {
    return (
      <View style={this.styles.wrapper}>
        <QuestionContainer quizCompleteCallback={() => { this.props.navigation.navigate('Results') }} />
      </View>
    )
  }
}
