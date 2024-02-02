import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, ImageBackground } from 'react-native'
import Tabs from './Tab'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer >
  )
}


export default App;