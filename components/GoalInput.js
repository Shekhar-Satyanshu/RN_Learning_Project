import React, {useState} from 'react';
import {View, TextInput, Modal, StyleSheet} from 'react-native';
import CommonButton from './CommonButton';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    
    const goalInputHandler = (enteredText) => {
        if (enteredText) {
            setEnteredGoal(enteredText);
        }
    };

    return (
        <Modal visible={props.isModalOpen} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Course Goal" 
                    onChangeText={goalInputHandler} 
                    value={enteredGoal}
                    style={styles.inputField} />
                <CommonButton title="ADD" onClickButton={props.onAddGoal.bind(this, enteredGoal)}/>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      inputField: {
        borderColor:'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: '80%'
    }
})

export default GoalInput;