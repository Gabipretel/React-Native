
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import AlbumScreen from '../screens/AlbumScreen';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="ChatScreen" component={ChatScreen} />
            <Tab.Screen name="ContactScreen" component={ContactScreen} />
            <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
        </Tab.Navigator>
    );
}

export default TopTabNavigator