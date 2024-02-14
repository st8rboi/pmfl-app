import { NavigationContainer } from '@react-navigation/native'
import Tabs from './Tab'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import React from 'react';
import AppLoading from 'expo-app-loading';

const fonts = () => {
  return (Font.loadAsync({
    'Cygre': require('./assets/fonts/Cygre.ttf'),
    'Hero': require('./assets/fonts/Hero.ttf')
  })
  )
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#171742', // Цвет основных элементов
    background: '#e8eff3', // Цвет фона
    text: '#000000', // Цвет текста
  },
};

const App = () => { 
  const [font, setFont] = React.useState(false);
  if (font) {
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Tabs />
        </NavigationContainer>
        <StatusBar style='light' />
      </PaperProvider>
    )
  } else {
    return (
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)}/>
    )
  }
}


export default App;