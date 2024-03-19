import React from "react";
import { View, TextInput, Button } from "react-native";
import styles from "../Styles";
import TopButton from "../components/Button";
import { createMatch } from "../functions/createNewMatch";

export const Info = () => {
    const [team_home, onChangeTH] = React.useState('');
    const [team_away, onChangeTA] = React.useState('');
    const [data, onChangeData] = React.useState('');
    const [goals_home, onChangeGH] = React.useState('');
    const [goals_away, onChangeGA] = React.useState('');

    return (
        <View>
            <View style={styles.buttonbox}>
                <Button title='Создать матч' onPress={() => createMatch(team_home, team_away, data, goals_home, goals_away)}/>
            </View>
            <TextInput style={styles.input} onChangeText={onChangeTH} value={team_home} placeholder='Первая команда' />
            <TextInput style={styles.input} onChangeText={onChangeTA} value={team_away} placeholder='Вторая команда' />
            <TextInput style={styles.input} onChangeText={onChangeData} value={data} placeholder='Дата матча' />
            <TextInput style={styles.input} onChangeText={onChangeGH} value={goals_home} placeholder='Авторы голов - первая команда' />
            <TextInput style={styles.input} onChangeText={onChangeGA} value={goals_away} placeholder='Авторы голов - вторая команда'/>
        </View>
    )
}
