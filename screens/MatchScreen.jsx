import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import matches from '../assets/matches/matches.json'
import MatchItem from '../components/MatchItem';

export const Match = () => {
    return (
        <View>
            <FlatList
                data={matches}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => alert('hello')}>
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


