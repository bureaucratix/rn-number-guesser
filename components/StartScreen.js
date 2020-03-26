import React, { useState} from 'react';
import {TouchableWithoutFeedback, Keyboard, View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import Card from './CardStyle'
import Input from  './Input'

const StartScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState()

const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))

}

const resetInputHandler  = () => {
    setEnteredValue('');
    setConfirmed(false);
}

const confirmInputHandler = () => {

    const chosenNumber = parseInt(enteredValue)
    if (isNaN(chosenNumber) || chosenNumber > 99 || chosenNumber <=0) {
        Alert.alert('Invalid Number', 'Number must be between 0 and 99.', [{text: 'Okay', style:'destructive', onPress: resetInputHandler}])
        return;
    }

    setEnteredValue('');
    setConfirmed(true);
    setSelectedNumber(chosenNumber)

}

let confirmedNumber;

if (confirmed) {
    confirmedNumber = <Card style={styles.summaryContainer}>
        <Text>
            You Chose: {"\n"}
        </Text>
        
        <View style={styles.numberConfirm}>
            <Text style={styles.numberText}>
                {selectedNumber}
            </Text>
        </View>
        <Button onPress={()=>{props.onStartGame(selectedNumber)}} title="START"/>
    </Card>
}


    return (
<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
<View style={styles.screen}>

            <Text style={styles.titleText} > {"\n"}New Game of Guess a Number! {"\n"}</Text>
            <Text> Pick a number between 1 and 99 and we'll try to guess.  {"\n"}</Text>
            <Card style={styles.inputContainer}>
            

                <View style={styles.titleCard} >
                    <Text>Enter a Number!</Text>
                    <Input 
                        blurOnSubmit 
                        textAlign={'center'} 
                        keyboardType='number-pad' 
                        maxLength={2} 
                        style={styles.input}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
            
                    <View style={styles.buttonContainer}>

                        <Button 
                            title='reset' 
                            onPress={resetInputHandler}
                        />

                        <Button 
                            title='confirm' 
                            onPress={confirmInputHandler}
                        />
                    </View>
                </View>

            </Card>
            {confirmedNumber}
        </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding: 15,
        alignItems:'center'
    },
    input :{
        width: 50,
        borderColor: '#000',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center'


    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center'
    },
    buttonContainer: {
        width: '80%',
        alignItems:'center',
        // justifyContent:'center',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20
      
    },
    summaryContainer: {
        width: '50%',
        margin: 30,
        alignItems:'center',
        justifyContent: 'center'
    },
    numberConfirm: {
        fontSize: 30,
        alignItems: 'center',
        borderColor: 'cyan',
        borderWidth: 3,
        width: 50,
        borderRadius: 10
    },
    numberText: {
        fontSize: 30,
        color: 'blue'
    },
    titleCard: {
        alignItems:'center'
    },
    titleText: {
        fontSize: 20,
        fontFamily: 'open-sans'
    }

})

export default StartScreen