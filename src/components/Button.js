import React from "react";
import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ callback, text }) => {

    const onPress = () => {
        callback()
    };

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.textBtn}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    button: {
        alignItems: "center",
        backgroundColor: Platform.OS === 'web' ? 'red' : "blue",
        padding:10,
        minWidth : 80 ,
        borderRadius : 20
    },
    textBtn : {
        color: '#fff',
        fontWeight: 'bold',
        fontSize : 36
    }

});

export default Button;