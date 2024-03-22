import React from 'react';
import { View, StyleSheet} from 'react-native';
import MatchItem from '../components/MatchItem'
import GoalsItem from '../components/GoalsItem';
import { WebView } from 'react-native-webview';


export const ThisMatch = ({ route }) => {
  const thisMatch = route.params.matches[route.params.id]
  const str_url = `${(thisMatch.url.replace('_', '&id=').replace('-', '_ext.php?oid=-') + '&hd=2')}`
  console.log(str_url)
  return (
    <View style={styles.container}>
        <MatchItem
          team_home={thisMatch.team_home}
          team_away={thisMatch.team_away}
          score_home={(thisMatch.goals_home == '')?(thisMatch.goals_home.split(',').length-1):(thisMatch.goals_home.split(',').length)}
          score_away={(thisMatch.goals_away == '')?(thisMatch.goals_away.split(',').length-1):(thisMatch.goals_away.split(',').length)}
          data={thisMatch.data} />
      <WebView
        scalesPageToFit={true}
        bounces={false}
        javaScriptEnabled
        style={{ height: 300, width: 685 }}
        source={{
          html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head> 
                    <body>
                      <div id="baseDiv"><iframe src=${str_url} width="500" height="320" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
                    </body>
                  </html>
            `,
          }}
          automaticallyAdjustContentInsets={false}
      />
      <GoalsItem goals_home={thisMatch.goals_home} goals_away={thisMatch.goals_away} />
    </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
