import React from "react";
import { View, TextInput, FlatList, TouchableOpacity } from "react-native";
import styles from "../Styles";
import { createMatch } from "../functions/createNewMatch";
import { useNavigation } from "@react-navigation/native";
import TopButton from "../components/Button";

export const Info = () => {
    const [team_home, onChangeTH] = React.useState('');
    const [team_away, onChangeTA] = React.useState('');
    const [data, onChangeData] = React.useState('');
    const [url, onChangeUrl] = React.useState('');
    const navigation = useNavigation();
 
    return (
        <View>
            <View style={styles.buttonbox}>
                <TopButton title='Создание' onPress={() => navigation.navigate('создание')} color='red'/>
                <TopButton title='Управление' onPress={() => navigation.navigate('управление')} color='black'/>
            </View>
            <TextInput style={styles.input} onChangeText={onChangeTH} value={team_home} placeholder='Первая команда' />
            <TextInput style={styles.input} onChangeText={onChangeTA} value={team_away} placeholder='Вторая команда' />
            <TextInput style={styles.input} onChangeText={onChangeData} value={data} placeholder='Дата матча' />
            <TextInput style={styles.input} onChangeText={onChangeUrl} value={url} placeholder='URL' />
            <TopButton title='Создать' onPress={() => createMatch(team_home, team_away, data, url)} color='red'/>
        </View>
    )
}
