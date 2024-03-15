import React from "react";
import { View, Text, Image} from "react-native";
import TopButton from '../components/Button';
import styles from "../Styles";
import { useNavigation } from "@react-navigation/native";

export const Stat = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.buttonbox}>
                <TopButton title='Командная' onPress={() => navigation.navigate('командная')} color='#171742' />
                <TopButton title='Индивидуальная' onPress={() => navigation.navigate('индивидуальная')} color='black'/>
            </View>
            <View style={{
                paddingLeft: 25,
                paddingTop: 10,

            }}>
            <Image style={{
                width: 310,
                height:550,
                borderRadius: 10
            }} source={require('../assets/11 (1).png')} />
            </View>
        </View>
    )
}