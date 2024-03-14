import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import MatchItem from '../components/MatchItem';
import { useNavigation } from '@react-navigation/native';
import TopButton from '../components/Button';
import styles from '../Styles';
import axios from 'axios';

export const Match = () => {
    const [matches, setMatches] = React.useState();
    const fetchData = async (limit = 10) => {
        const response = await fetch(
            'https://65ba3f9fb4d53c0665526458.mockapi.io/matches'
        );
        const data = await response.json();
        setMatches(data)
    }
    React.useEffect(() => {
        fetchData();
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
                <TopButton title='Ближайшие' onPress={() => navigation.navigate('ближайшие')} color='#171742' />
                <TopButton title='Прошедшие' onPress={() => navigation.navigate('прошлые')} color='black'/>
            </View>
            <FlatList
                data={matches}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('thismatch', {
                        id: item.id,
                        screen: matches,
                    })}>
                        <MatchItem
                            team_home={item.team_home}
                            team_away={item.team_away}
                            score_home={item.score_home}
                            score_away={item.score_away}
                            data={item.data}
                        />
                    </TouchableOpacity>
                )}
                refreshing={refreshing}
                onRefresh={handleRefresh}
                />
            </View>
            
    );
}


