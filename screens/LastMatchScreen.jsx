import React from 'react';
import { View, TouchableOpacity, FlatList , Text} from 'react-native';
import MatchItem from '../components/MatchItem';
import { useNavigation } from '@react-navigation/native';
import TopButton from '../components/Button';
import styles from '../Styles';

export const LastMatch = () => {
    const [lastmatches, setLastMatches] = React.useState();
    const fetchData = async (limit = 10) => {
        const response = await fetch(
            'https://65ba3f9fb4d53c0665526458.mockapi.io/matches'
        );
        const data = await response.json();
        setLastMatches(data)
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
                <TopButton title='Ближайшие' onPress={ () => navigation.navigate('ближайшие') }  color='black'/>
                <TopButton title='Прошедшие' onPress={() => navigation.navigate('прошлые')} color='#171742'/>

            </View>
<FlatList
                data={lastmatches}
                renderItem={({ item }) => {
                    if (item.lastnow == 0 && item.visible == "1") {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('thismatch', {
                                id: item.id,
                                matches: lastmatches
                            })}>
                                <MatchItem
                                    key={item.id}
                                    team_home={item.team_home}
                                    team_away={item.team_away}
                                    score_home={item.goals_home.split(',').length-1}
                                    score_away={item.goals_away.split(',').length-1}
                                    data={item.data}
                                />
                            </TouchableOpacity>
                
                        )
                    } else {
                        return null
                    }
                }}
                refreshing={refreshing}
                onRefresh={handleRefresh}
                />
        </View>
    );
}


