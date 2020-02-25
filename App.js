import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'


export default function App() {

  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartScreen onStartGame={startGameHandler}/>

  if (userNumber) {
    content = <GameScreen userChoice={userNumber}/>
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
