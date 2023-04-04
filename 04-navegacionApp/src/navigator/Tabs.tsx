import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import Tab3Screen from '../screens/Tab3Screen';
import StackNavigator from './StackNavigator';

const Tab= createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tab1Screen" options={{title:'home'}} component={ Tab1Screen } />
            <Tab.Screen name="Tab2Screen" options={{title:'profile'}} component={ Tab2Screen } />
            <Tab.Screen name="StackNavigator" options={{title:'desktop'}} component={ StackNavigator } />
        </Tab.Navigator>
    )
}

export default Tabs
