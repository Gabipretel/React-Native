import React from 'react'
import InicioScreen from './src/screens/InicioScreen'
import ContadorScreen from './src/screens/ContadorScreen'
import BoxObjectModel from './src/screens/BoxObjectModel'
import { SafeAreaView } from 'react-native'
import DimensionesScreen from './src/screens/DimensionesScreen'
import PositionScreen from './src/screens/PositionScreen'
import FlexScreen from './src/screens/FlexScreen'
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <InicioScreen /> */}
      {/* <ContadorScreen /> */}
      {/* <BoxObjectModel /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      <FlexScreen />
    </SafeAreaView>
  )
}
export default App