import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from '../pages/MapScreen';
import PermissionsScreen from '../pages/PermissionsScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false, cardStyle:{
    backgroundColor:'#FFF'
    }}}>
      <Stack.Screen name="Maps" component={MapScreen} />
      <Stack.Screen name="Permissions" component={PermissionsScreen} />
    </Stack.Navigator>
  );
};
export default Navigator