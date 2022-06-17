import React, { useState } from "react";

import {Dimensions, StyleSheet, Text, View } from "react-native";
import Button from "./Button";
const Counter = () => {

    const [state, setState] = useState({
        counter: 0
    })

    const decCounter = () => {
        setState({
            ...state,
            counter: state.counter - 1
        })
    };
    const incCounter = () => {
        setState({
            ...state,
            counter: state.counter + 1
        })
    };

    return (
        <View style={styles.container}>
            <Button callback={decCounter} text="-" />
            <Text style={styles.counter}>{state.counter}</Text>
            <Button callback={incCounter} text="+" />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width : Dimensions.get('screen').width
    },
    counter: {
        fontWeight: 'bold',
        fontSize: 36
    }

});

export default Counter;