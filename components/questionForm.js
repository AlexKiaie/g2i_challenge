import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';
import Encoder from '../lib/encoder';

import styles from '../constants/styles';

export default class QuestionForm extends Component {
    constructor(props) {
      super(props);
      this.styles = StyleSheet.create(styles.quizScreen);
      this.state = {selectedOption: ""};
    }

    setSelectedOption(selectedOption) {
        this.setState({selectedOption});
    }

    renderOption(option, selected, onSelect, index) {
        const style = selected ? 
            Object.assign({}, styles.quizScreen.radioButtonSelected, styles.quizScreen.radioButton) :
            styles.quizScreen.radioButton;
            
        return (
            <TouchableHighlight 
                onPress={onSelect} 
                key={index}>
                <Text style={style}>{option}</Text>
            </TouchableHighlight>
        );
    }

    renderContainer(optionNodes) {
        return <View style={styles.quizScreen.radioGroup}>{optionNodes}</View>;
    }

    render() {        
        const { currentQuestion, submit, isLastQuestion, progressMessage } = this.props
        const btnText = isLastQuestion ? "SEE SCORE" : "NEXT";

        return (
            <View style={this.styles.formWrap}>
                <View style={this.styles.categoryWrap}>
                    <Text style={this.styles.categoryText}>
                        {currentQuestion.category}
                    </Text>
                </View>
                <View style={this.styles.questionWrap}>
                    <Text style={this.styles.questionText}>
                        {Encoder.htmlDecode(currentQuestion.question)}
                    </Text>
                    <Text>{progressMessage}</Text>
                </View>
                <View style={this.styles.buttonWrap}>
                    <RadioButtons
                        options={ ["True", "False"] }
                        onSelection={ this.setSelectedOption.bind(this) }
                        selectedOption={ this.state.selectedOption }
                        renderOption={ this.renderOption }
                        renderContainer={ this.renderContainer }
                    />
                </View>
                <ContinueButton text={btnText} 
                    onPressHandler={() => { 
                        const val = this.state.selectedOption;
                        if (!val)
                            return;
                        submit(val);
                        this.setState({selectedOption: ""});
                    }} />
            </View>
        )
    }
}
