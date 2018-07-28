import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from '../constants/styles';

export default class QuizScore extends Component {
    constructor(props) {
        super(props);
        this.styles = StyleSheet.create(styles.resultsScreen);
    }

    render() {
        const { score, quizLength } = this.props;

        return (
            <View>
                <Text style={this.styles.scoreText}>You scored</Text>
                <Text style={this.styles.scoreText}>{score} / {quizLength}</Text>
            </View>
        )
    }
}