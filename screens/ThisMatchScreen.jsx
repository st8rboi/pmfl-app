import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import matches from '../assets/matches/matches.json'
import lastmatches from '../assets/matches/lastmatches.json'
import MatchItem from '../components/MatchItem'
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';

export const ThisMatch = ({ route }) => {
    const thisMatch = route.params.screen[route.params.id]
    return (
      <View> 
        <MatchItem
          team_home={thisMatch.team_home}
          team_away={thisMatch.team_away}
          score_home={thisMatch.score_home}
          score_away={thisMatch.score_away}
          data={thisMatch.data} />
        
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  matchResultContainer: {
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  matchResultText: {
    fontSize: 18,
  },
  goalsContainer: {
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 10,
  },
  goalsHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

