import React, {useState} from 'react'
import { Text, View, StyleSheet} from 'react-native';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const randNum = Math.floor(Math.random() * (max-min)) + min;
    if (randNum === exclude) {
        return generateRandomBetween( min, max, exclude)
    } else {
        return randNum
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))

}

const styles = StyleSheet.create({

});

export default GameScreen;