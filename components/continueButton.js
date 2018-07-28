import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

import styles from '../constants/styles';

export default ContinueButton = ({text, onPressHandler}) => (
    <TouchableHighlight
        style={styles.continueButton.button}
        onPress={() => { onPressHandler(); }}>
        <Text style={styles.continueButton.buttonText}>{text}</Text>
    </TouchableHighlight>
)