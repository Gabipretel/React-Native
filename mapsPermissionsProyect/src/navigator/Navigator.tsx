import React, { useContext } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from '../pages/MapScreen';
import PermissionsScreen from '../pages/PermissionsScreen';
import { PermissionsContext } from '../context/PermissionsContext';
import LoadingScreen from '../pages/LoadingScreen';

const Stack = createStackNavigator();

const Navigator = () => {
    const {permissions} = useContext(PermissionsContext)

    if(permissions.locationStatus === 'unavailable'){
        return <LoadingScreen/>
    }

    return (
    <Stack.Navigator
        screenOptions={{
        headerShown: false,
        cardStyle: {
            backgroundColor: '#FFF',
        }
        }}>
        { (permissions.locationStatus ===  'granted')
        ? <Stack.Screen name="Maps" component={MapScreen} /> 
        : <Stack.Screen name="Permissions" component={PermissionsScreen} /> }
        
    </Stack.Navigator>
    );
};
export default Navigator;
