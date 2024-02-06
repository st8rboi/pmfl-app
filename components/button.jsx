import React, { useState } from 'react';
import { View, Button } from 'react-native';
import styles from '../Styles';


function TopButton(props) {

    return (
        <View style={styles.button}>
            <Button
                title={props.title}
                onPress={props.onPress}
                color={props.color}
            />
        </View>
    );
}


export default TopButton;