import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { chooseLogo } from '../functions/chooseLogo'
import styles from '../Styles';

function MatchItem({ team_home, team_away, score_home, score_away, data }) {
    return (
        <View style={styles.containerMatch}>
            <View style={styles.cardMatch}>
                <Image source={chooseLogo(team_home)} style={styles.image} />
                <Text style={styles.team}>{team_home}</Text>
                <Text style={styles.score}>{score_home}</Text>
                <Text style={styles.vs}>vs</Text>
                <Text style={styles.score}>{score_away}</Text>
                <Text style={styles.team}>{team_away}</Text>
                <Image source={chooseLogo(team_away)} style={styles.image} />
            </View>
            <Text style={styles.datatextMatch}>{data}</Text>
        </View>



    );
}


export default MatchItem;