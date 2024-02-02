import React from "react";
import { Button, View, StyleSheet } from "react-native";

let nowColor = '#fffff'

const changeColor = () =>
    nowColor = '#000000'

export const Match = () => {
    return (
        <View style={styles.view}>
            <Button style={styles.button} title="Ближайшие" onPress={changeColor} />
            <Button color="#000000" title="Прошедшие" onPress={changeColor} />
        </View >
    )
}

//paddingTop: 20,
//  flexDirection: 'row',
//      justifyContent: 'center',
//         columnGap: 10,
const styles = StyleSheet.create({
    view: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 10,
    },
})
