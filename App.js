import { NavigationContainer } from '@react-navigation/native'
import Tabs from './Tab'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

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
    </PaperProvider>
  )
}


export default App;