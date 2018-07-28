import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Encoder from '../lib/encoder';

import styles from '../constants/styles';

export default class QuizResults extends Component {
    constructor(props) {
      super(props);
      this.styles = StyleSheet.create(styles.resultsScreen);
    }

    render() {
        const { questions, results } = this.props;
        
        return(
            <ScrollView>
            {
                questions.map((item, index) => (
                    <View key={index} style={this.styles.resultRow}>
                        <Text style={this.styles.resultIcon}>
                            {results[index] ? '+' : '-'}
                        </Text>
                        <Text style={this.styles.resultText}>
                            {Encoder.htmlDecode(item.question)}
                        </Text>
                    </View>
                ))
            }
            </ScrollView>
        )
    }
}