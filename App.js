import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'


export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a number"/> 
      <StartScreen />
      {/* <GameScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
