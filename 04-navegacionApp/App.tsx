import React from 'react'
import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './src/navigator/StackNavigator';
import DrawerNavigator from './src/navigator/DrawerNavigator';
import DrawerNavigatorPersonalizado from './src/navigator/DrawerNavigatorPersonalizado';
import TabsIOS from './src/navigator/Tabs';
import DrawerNavTabs from './src/navigator/DrawerNavTabs';
import { AuthProvider } from './src/context/AuthContext';




const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <DrawerNavigator /> */}
        {/* <StackNavigator /> */}
        {/* <DrawerNavigatorPersonalizado /> */}
        {/* <Tabs/> */}
        <DrawerNavTabs />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: { children: JSX.Element }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}


export default App