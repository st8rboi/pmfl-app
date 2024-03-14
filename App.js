import { NavigationContainer } from '@react-navigation/native'
import Tabs from './Tab'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import React from 'react';


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
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Tabs />
        </NavigationContainer>
        <StatusBar style='default' />
      </PaperProvider>
    )
}


export default App;