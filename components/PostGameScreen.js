import React from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native'
import Card from './CardStyle'



const PostGameScreen = props => {

    const goToStart = () => {
        props.goToStart(null)
    }

    return (
        <View style={styles.screen}>
            <Text> Oh, I know-- it's {props.userChoice}! {"\n"} HAHA. GAME OVER! </Text>
            <Text> {"\n"}{"\n"}Number of Guesses: </Text>
            <Card style={styles.guessContainer}>
                <Text style={{fontSize:20, fontWeight:'bold'}}> {props.guessesNum} </Text>
            </Card>
            <Image style={{width:'80%', height:300}}
            source={require("../assets/trophy.jpeg")} />
            <Button title="AGAIN!" onPress={goToStart}> </Button>

        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding: 10,
        marginBottom: '20%',
        alignItems:'center',
        justifyContent: 'center'

    },
    guessContainer: {
        width: '20%',
        margin: 10,
        alignItems:'center',
        justifyContent: 'center'
    }

});


export default PostGameScreen;