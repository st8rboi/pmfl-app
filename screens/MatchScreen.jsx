import React from 'react';
import { View } from 'react-native';
import NewButton from '../components/button';
import styles from '../styles';

export const Match = () => {
    return (
        <View style={styles.view}>
            <NewButton title='Ближайшие' />
            <NewButton title='Прошедшие' />
        </View>
    );
}


