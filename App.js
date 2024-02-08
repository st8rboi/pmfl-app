import { NavigationContainer } from '@react-navigation/native'
import Tabs from './Tab'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#171717', // Цвет основных элементов
    background: '#000000', // Цвет фона
    text: '#ffffff', // Цвет текста
  },
};

const App = () => { 

  return (
    <PaperProvider theme={theme}>
    <NavigationContainer theme={theme}>
      <Tabs />
    </NavigationContainer>
      <StatusBar style='light'/>
    </PaperProvider>


  )
}


export default App;