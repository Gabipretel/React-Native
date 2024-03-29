import React from 'react';

import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import AnimationScreen01 from '../screens/AnimationScreen01';
import AnimationScreen02 from '../screens/AnimationScreen02';
import AnimationScreen03 from '../screens/AnimationScreen03';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import TextInputScreen from '../screens/TextInputScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';
import CustomSectionListScreen from '../screens/CustomSectionListScreen';
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen';
// import MyTopModalScreen from '../screens/MyTopModalScreen';

const Stack = createStackNavigator();

const Navigation = () => {

  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AnimationScreen01" component={AnimationScreen01} />
      <Stack.Screen name="AnimationScreen02" component={AnimationScreen02} />
      <Stack.Screen name="AnimationScreen03" component={AnimationScreen03} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
      <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
      <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;  

