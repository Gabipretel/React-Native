import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import CalculadoraScreen from './src/screens/CalculadoraScreen'
import { styles } from './src/theme/appTheme'

const App = () => {
  return (
    <SafeAreaView style={styles.bgApp}>
      {/* StatusBar hace referencia a los iconos en la parte superior de la pantalla(red wifi,bateria,etc.) */}
      <StatusBar 
      backgroundColor={'#000'}
      barStyle='light-content'
       />
      <CalculadoraScreen />
    </SafeAreaView>
  ) 
}

export default App


 