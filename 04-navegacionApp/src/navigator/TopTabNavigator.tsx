
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import AlbumScreen from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    ///Hook para SafeAreaView
    const {top: paddingTop } = useSafeAreaInsets()
    
    return (
        <Tab.Navigator
        style={{
            paddingTop
        }}
        sceneContainerStyle={{
            backgroundColor:colors.white
        }}
        screenOptions={{
            tabBarPressColor:colors.turquoise,
            tabBarShowIcon:true,
            tabBarIndicatorStyle:{
                backgroundColor:colors.turquoise
            },
            tabBarStyle: {
                borderTopColor: colors.turquoise,
                borderTopWidth: 0,
                elevation: 0,
              },
        }}

        >
            <Tab.Screen name="ChatScreen" component={ChatScreen} />
            <Tab.Screen name="ContactScreen" component={ContactScreen} />
            <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
        </Tab.Navigator>
    );
}

export default TopTabNavigator