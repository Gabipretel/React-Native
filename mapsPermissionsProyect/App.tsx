import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigator/Navigator';
import { PermissionsProvider } from './src/context/PermissionsContext';
const App = () => {

	const AppState = ({children}:{children: JSX.Element | JSX.Element []}) => {
		return( 
		<PermissionsProvider>
			{children}
		</PermissionsProvider>
	)
	}
	
    return (
    <NavigationContainer>
		<AppState>
            <Navigator/>
		</AppState>
    </NavigationContainer>
    );
};

export default App;
