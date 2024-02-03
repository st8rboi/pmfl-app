import React from 'react';
import { View, Button } from 'react-native';
import styles from '../styles';

function NewButton(props) {
    return (
        <View style={styles.button}>
            <Button
                title={props.title}
                onPress={() => console.log('Button pressed')}
            />
        </View>
    );
}


export default NewButton;