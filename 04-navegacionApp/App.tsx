import React from 'react'
import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './src/navigator/StackNavigator';




const Stack= createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
  )
}

export default App