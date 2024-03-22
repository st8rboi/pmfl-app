import React from "react"
import { View, TextInput } from "react-native"
import TopButton from "../components/Button"
import { visibleMatch } from "../functions/visibleMatch"
import { startMatch } from "../functions/startMatch"
import MatchItem from "../components/MatchItem"
import styles from "../Styles"

export const ThisManage = ({ route }) => {
    const thisMatch = route.params.matches[route.params.id]
    const [id, onChangeId] = React.useState('')
    return (
        <View>
            <MatchItem
          team_home={thisMatch.team_home}
          team_away={thisMatch.team_away}
          score_home={(thisMatch.goals_home == '')?(thisMatch.goals_home.split(',').length-1):(thisMatch.goals_home.split(',').length)}
          score_away={(thisMatch.goals_away == '')?(thisMatch.goals_away.split(',').length-1):(thisMatch.goals_away.split(',').length)}
                data={thisMatch.data} />
            
            <TopButton
                title={(thisMatch.data == "• LIVE") ? 'Закончить матч' : 'Начать матч'}
                onPress={() => startMatch(route.params.id, thisMatch.data)}
                color='green' />
            <TopButton
                title={(thisMatch.visible == "1") ? 'Скрыть матч' : 'Показать матч'}
                onPress={() => visibleMatch(route.params.id, thisMatch.visible)}
                color={(thisMatch.visible == "1")?'red':'blue'} />
        </View>
    )
}