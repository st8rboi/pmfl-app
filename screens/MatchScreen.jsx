import React from 'react';
import { View, TouchableOpacity, FlatList, Button } from 'react-native';
import matches from '../assets/matches/matches.json'
import MatchItem from '../components/MatchItem';
import { useNavigation } from '@react-navigation/native';
import TopButton from '../components/Button';
import styles from '../Styles';

export const Match = () => {
    
    const navigation = useNavigation();
    return (
        <View>   
            <View style={styles.buttonbox}>
                <TopButton title='Ближайшие' onPress={() => navigation.navigate('ближайшие')} color='green'/>
                <TopButton title='Прошедшие' onPress={() => navigation.navigate('прошлые')} color='black'/>
            </View>
            <FlatList
                data={matches}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('thismatch', {
                        id: item.id,
                        screen: "matches",
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
            />
            </View>
            
    );
}


