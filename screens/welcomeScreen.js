import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import styles from '../constants/styles';
import ContinueButton from '../components/continueButton';

export default class WelcomeScreen extends React.Component {  
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create(styles.welcomeScreen);
  }  

  render() {
    return (
      <View style={this.styles.wrapper}>
        <View style={this.styles.titleView}>
          <Text style={this.styles.titleText}>Welcome to the</Text>
          <Text style={this.styles.titleText}>Trivia Challenge!</Text>
        </View>

        <View style={this.styles.middleView}>
          <Text style={this.styles.middleText}>You will be presented with 10 True or False questons.</Text>
        </View>

        <View style={this.styles.bottomView}>
          <Text style={this.styles.bottomText}>Can you score 100%?</Text>
        </View>

        <ContinueButton text='BEGIN' onPressHandler={() => { this.props.navigation.navigate('Quiz') }} />
      </View>
    );
  }
}
