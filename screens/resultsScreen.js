import React from 'react';
import { View, StyleSheet } from 'react-native';

import styles from '../constants/styles';
import ResultsContainer from '../containers/resultsContainer';

export default class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create(styles.resultsScreen);
  }

  render() {
    return (
      <View style={this.styles.wrapper}>
        <ResultsContainer nav={ this.props.navigation } />
      </View>
    );
  }
}
