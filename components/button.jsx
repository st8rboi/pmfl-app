import React, { useState } from 'react';
import { View, Button } from 'react-native';
import styles from '../Styles';


function TopButton(props) {

    return (
        <View style={{
            borderRadius: 15,
            overflow: 'hidden',
            marginRight: 5,
            marginLeft: 10,
        }}>
            <Button
                title={props.title}
                onPress={props.onPress}
                color={props.color}
            />
        </View>
    );
}


export default TopButton;