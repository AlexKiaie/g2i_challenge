import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const baseFontSize = 20;
const headerPadding = 50;

export default {
  window: {
    windowWidth,
    windowHeight,
  },
  welcomeScreen: {
    wrapper: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: headerPadding
    },
    titleView: {
      flex: 2,
      alignItems: 'center',
    },
    titleText: {
      fontSize: baseFontSize + 10,
      fontWeight: 'bold'
    },
    middleView: {
      flex: 2,
      alignItems: 'center'
    },
    middleText: {
      width: '75%',
      textAlign: 'center',
      fontSize: baseFontSize
    },
    bottomView: {
      flex: 2,
      alignItems: 'center'
    },
    bottomText: {
      fontSize: baseFontSize
    }
  },
  quizScreen: {
    wrapper: {
      flex: 1,
      paddingTop: headerPadding
    },
    formWrap: {
      flex: 1
    },
    categoryWrap: {
      flex: 1
    },
    categoryText: {
      alignSelf: 'center',
      fontSize: baseFontSize,
      fontWeight: 'bold',
    },
    questionWrap: {
      flex: 2,
      alignItems: 'center'
    },
    questionText: {
      width: '75%',
      textAlign: 'center',
      fontSize: baseFontSize,
      paddingTop: 30,
      paddingRight: 30,
      paddingLeft: 30,
      paddingBottom: 30,
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 10
    },
    buttonWrap: {
      flex: 1
    },
    radioGroup: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    radioButton: {
      width: 150,
      height: 80,
      fontSize: baseFontSize,
      textAlign: 'center',
      paddingTop: 25
    },
    radioButtonSelected: {
      borderWidth: 5,
      borderStyle: 'solid',
      borderRadius: 10,
      borderColor: '#0A0'
    }
  },
  resultsScreen: {
    wrapper: {
      paddingTop: headerPadding,
      alignItems: 'center',
      flex: 1,
    },
    contentWrap: {
      flex: 1
    },
    scoreWrap: {
      flex: 1,
      marginBottom: -50,
    },
    scoreText: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: baseFontSize
    },
    resultsWrap: {
      flex: 3,
      marginBottom: 30,
      paddingRight: 20,
      paddingLeft: 20
    },
    resultRow: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: 20
    },
    resultText: {
      fontSize: baseFontSize
    },
    resultIcon: {
      width: 30,
      fontSize: baseFontSize + 10
    }
  },
  continueButton: {
    button: {
      flex: 1,
      backgroundColor: '#3AF',
      justifyContent: 'center'
    },
    buttonText: {
      fontSize: baseFontSize,
      alignSelf: 'center',
      color: 'white',
      textAlign: 'center'
    }
  }
};
