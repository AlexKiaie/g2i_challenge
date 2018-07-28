import { createStackNavigator } from 'react-navigation';

import WelcomeScreen from '../screens/welcomeScreen'
import QuizScreen from '../screens/quizScreen';
import ResultsScreen from '../screens/resultsScreen';

const Router = createStackNavigator(
    {
        Welcome: { screen: WelcomeScreen },
        Quiz: { screen: QuizScreen },
        Results: { screen: ResultsScreen }
    },
    { 
        initialRouteName: 'Welcome',
        headerMode: 'none'
    }
);

export default Router