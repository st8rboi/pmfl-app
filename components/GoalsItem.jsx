import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const GoalsItem = ({ goals_home, goals_away }) => {

  return (
    <View style={styles.container}>
          <View style={styles.block1}>
              {goals_home.split(',').map((el, index) => (<Text style={styles.text} key={index}>{el}</Text>))}
        </View>
          <View style={styles.block2}>
              {goals_away.split(',').map((el, index) => (<Text style={styles.text} key={index}>{el}</Text>))}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
  },
  block1: {
    width: 120,
    height: 500,
  },
  block2: {
    width: 120,
    height: 500,
    },
    text: {
        fontSize: 15,
  }
});

export default GoalsItem;