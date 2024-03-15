import React from "react";
import { View, Text} from "react-native";
import TopButton from '../components/Button';
import styles from "../Styles";
import { useNavigation } from "@react-navigation/native";

export const StatPerson = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.buttonbox}>
                <TopButton title='Командная' onPress={() => navigation.navigate('командная')} color='black' />
                <TopButton title='Индивидуальная' onPress={() => navigation.navigate('индивидуальная')} color='#171742'/>
            </View>
            <Text>Hello 2</Text>
        </View>
    )
}