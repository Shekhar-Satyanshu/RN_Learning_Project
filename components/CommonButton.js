import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from "react-native";

const CommonButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onClickButton} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})

export default CommonButton;