import React from 'react'
import InicioScreen from './src/screens/InicioScreen'
import ContadorScreen from './src/screens/ContadorScreen'
import BoxObjectModel from './src/screens/BoxObjectModel'
import { SafeAreaView } from 'react-native'

const  App=()=> {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <InicioScreen /> */}
      {/* <ContadorScreen /> */}
      <BoxObjectModel />
    </SafeAreaView>
  )
}
export default App