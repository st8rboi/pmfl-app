import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import matches from '../assets/matches/matches.json'

export const ThisMatch = ({ route }) => {
  const thisMatch = matches[route.params.id]
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Исход матча</Text>
        <View style={styles.matchResultContainer}>
          <Text style={styles.matchResultText}>
            {thisMatch.team_home} {thisMatch.score_home} : {thisMatch.score_away} {thisMatch.team_away}</Text>
        </View>
        <View style={styles.goalsContainer}>
          <Text style={styles.goalsHeaderText}>Авторы голов:</Text>
          <Text>Гол 1: Игрок A</Text>
          <Text>Гол 2: Игрок B</Text>
          <Text>Гол 3: Игрок A</Text>
          <Text>Гол 4: Игрок B</Text>
        </View>
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

