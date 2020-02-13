import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        backgroundColor: 'white',
        marginVertical: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width:0,height:2},
        shadowOpacity: 0.2,
        shadowRadius: 6,
        borderRadius: 12

    },
})

export default Card