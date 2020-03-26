import React, {useState, useRef, useEffect} from 'react'
import { Button, Text, View, StyleSheet, Alert} from 'react-native';
import Card from './CardStyle'

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

    const [rounds, setRounds] = useState(0)
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const { userChoice, onGameOver} = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }

    }, [currentGuess, userChoice, onGameOver])

    const goToStart = () => {
        props.goToStart(null)
    }

    const guessLower = () => {
        if (currentGuess <= props.userChoice ) {
            Alert.alert("That doesn't make sense!", "Please don't lie to the computer :(", [{text:"Whoops, sorry!", style:'cancel'}]);
            return;
        }
    
        currentHigh.current = currentGuess;
        const next = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setRounds(rounds=>rounds+1)
        setCurrentGuess(next)
    }
    
    const guessHigher = () => {
        if (currentGuess >= props.userChoice ) {
            Alert.alert("That doesn't make sense!", "Please don't lie to the computer :(", [{text:"Whoops, sorry!", style:'cancel'}]);
            return;
        }
    
        currentLow.current = currentGuess+1;
        const next = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setRounds(rounds=>rounds+1)
        setCurrentGuess(next)
    
    }
    
    const guessCorrect = () => {
        if (currentGuess != props.userChoice ) {
            Alert.alert("That doesn't make sense!", "Please don't lie to the computer :(", [{text:"Whoops, sorry!", style:'cancel'}]);
            return;
        }


    
    }

    return(

        <View style={styles.screen}>
            
                <Button title="Go Back!" onPress={goToStart}></Button>

                <Text> My guess: {"\n"} </Text>

                <Card style={styles.guessContainer}>
                    <Text style={{fontSize: 20}}> {currentGuess} </Text>
                </Card>
              <Card style={styles.buttonContainer}>
                   <Button title="Lower!" onPress={guessLower}></Button>
                   <Button title="Higher!" onPress={guessHigher}></Button>

              </Card>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding: 10,
        alignItems:'center'
    },
    guessContainer: {
        width: '20%',
        margin: 10,
        alignItems:'center',
        justifyContent: 'center'
    },
    buttonContainer : {
        justifyContent: 'space-evenly',
        width: 200,
        maxWidth: '80%',
        flexDirection: "row"
    }

});

export default GameScreen;