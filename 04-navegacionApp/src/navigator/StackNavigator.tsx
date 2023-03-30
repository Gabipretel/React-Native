import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';
import Pagina4Screen from '../screens/Pagina4Screen';


interface PersonParams {
    id: number;
    name: string;
    lastName: string;
}

export type RootStackParams = {
    Pagina1Screen: undefined;
    Pagina2Screen: undefined;
    Pagina3Screen: undefined;
    Pagina4Screen: PersonParams
}

const Stack = createStackNavigator<RootStackParams>();


const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Pagina1Screen'
            screenOptions={{
                // headerShown:false,
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                cardStyle: {
                    backgroundColor: '#fff'
                },
                // title:'DEMO1'
            }}

        >
            <Stack.Screen name="Pagina1Screen" options={{ title: 'Pagina1' }} component={Pagina1Screen} />
            <Stack.Screen name="Pagina2Screen" options={{ title: 'Pagina2' }} component={Pagina2Screen} />
            <Stack.Screen name="Pagina3Screen" options={{ title: 'Pagina3' }} component={Pagina3Screen} />
            <Stack.Screen name="Pagina4Screen" options={{ title: 'Pagina4' }} component={Pagina4Screen} />
        </Stack.Navigator>
    )
}

export default StackNavigator