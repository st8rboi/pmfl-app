import React from "react"
import { View, TextInput } from "react-native"
import TopButton from "../components/Button"
import { visibleMatch } from "../functions/visibleMatch"
import { startMatch } from "../functions/startMatch"
import MatchItem from "../components/MatchItem"
import DropdownComponent from "../components/DropDown"

const fetchData = async (team) => {
    const response = await fetch(
        'https://65ba3f9fb4d53c0665526458.mockapi.io/teams'
    );
    const predata = await response.json();
    return predata['0'][team].split(',');
}

(async () => {
    const arr = await fetchData('AFK');
    const data = arr.map((element, index) => {
  return { label: element, value: (index + 1).toString() };
    })
        return data;
})();
export const ThisManage = ({ route }) => {
    const thisMatch = route.params.matches[route.params.id]
   
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
                color={(thisMatch.visible == "1") ? 'red' : 'blue'} />
            <DropdownComponent data={data}/>
        </View>
    )
}