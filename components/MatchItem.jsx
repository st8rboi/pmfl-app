import React from "react";
import { View, Text, Image } from "react-native";
import { chooseLogo } from '../functions/chooseLogo'

export const MatchItem = ({ team_home, team_away, score_home, score_away }) => {
    const logo_home = chooseLogo(team_home)
    const logo_away = chooseLogo(team_away)
    return (
        <View>
            <Image source={logo_home} style={{ width: 40, height: 40 }} />
            <Image source={logo_away} style={{ width: 40, height: 40 }} />
            <Text>{team_home} {score_home}:{score_away} {team_away}</Text>
        </View>
    )
};