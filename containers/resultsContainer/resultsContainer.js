import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import styles from '../../constants/styles';
import QuizScore from '../../components/quizScore';
import QuizResults from '../../components/quizResults';
import ContinueButton from '../../components/continueButton';

export default class ResultsContainer extends Component {
    constructor(props) {
      super(props);
      this.styles = StyleSheet.create(styles.resultsScreen);
    }

    render() {
        const { userScore, questions, resetQuiz, nav, results } = this.props;

        return (
            <View style={this.styles.contentWrap}>
                <View style={this.styles.scoreWrap}>
                    <QuizScore score={userScore} quizLength={questions.length} />
                </View>
                <View style={this.styles.resultsWrap}>
                    <QuizResults questions={questions} results={results} />
                </View>
                <ContinueButton text="Play Again?"
                    onPressHandler={() => {
                        resetQuiz();
                        nav.navigate('Welcome');
                    }} />
            </View>
        )
    }
}