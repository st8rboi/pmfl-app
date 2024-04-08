import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import styles from "../Styles";
import TopButton from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import MatchItem from "../components/MatchItem";


export const Manage = () => {
    const [matches, setMatches] = React.useState();
    const fetchData = async (limit = 10) => {
        const response = await fetch(
            'https://65ba3f9fb4d53c0665526458.mockapi.io/matches'
        );
        const data = await response.json();
        setMatches(data)
        return data
    }
    const autoRefresh = () => {
        setInterval(() => {
        fetchData();
        }, 5000); // Обновление данных каждые 5 секунд (можно настроить интервал по необходимости)
    }

    React.useEffect(() => {
        fetchData();
        autoRefresh()
    }, [])
    const [refreshing, setRefreshing] = React.useState(false);
    const handleRefresh = () => {
        setRefreshing(true);
        fetchData(10);
        setRefreshing(false)
        }   

    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.buttonbox}>
                <TopButton title='Создание' onPress={() => navigation.navigate('создание')} color='black'/>
                <TopButton title='Управление' onPress={() => navigation.navigate('управление')} color='red' />
            </View>
                <FlatList
                data={matches}
                renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('управление_матчем', {
                                id: item.id,
                                matches: matches
                            })}>
                                <MatchItem
                                    team_home={item.team_home}
                                    team_away={item.team_away}
                                    score_home={(item.goals_home == '')?(item.goals_home.split(',').length-1):(item.goals_home.split(',').length)}
                                    score_away={(item.goals_away == '')?(item.goals_away.split(',').length-1):(item.goals_away.split(',').length)}
                                    data={item.data}
                                />
                            </TouchableOpacity>
                
                        )
                    } 
                }
                refreshing={refreshing}
                onRefresh={handleRefresh}
            />
        </View>
    )
}