import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'
import PostGameScreen from './components/PostGameScreen'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return( <AppLoading 
    startAsync={fetchFonts} 
    onFinish={setDataLoaded(true)} 
    onError={(err) => console.log(err)}
    />)
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setTotalGuesses(0);
  };

  const returnToStart = () =>{
    setUserNumber(null)  
    setTotalGuesses(0)
  }

  const gameOverHandler = numOfRounds => {
    setTotalGuesses(numOfRounds)
  }

  let content = <StartScreen onStartGame={startGameHandler}/>

  if (userNumber && totalGuesses === 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} goToStart={returnToStart}/>
  } else if (totalGuesses > 0) {
    content = <PostGameScreen userChoice={userNumber} guessesNum={totalGuesses} goToStart={returnToStart}/>
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a number"/> 
     {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
