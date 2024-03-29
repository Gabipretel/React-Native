import React, { useContext } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { PermissionsContext } from '../context/PermissionsContext';

const PermissionsScreen = () => {
	const {permissions,askLocationPermission} = useContext(PermissionsContext)

    return (
    <View style={styles.container}>
        <Text>PermissionsScreen</Text>
        <Button 
        title='Permisos'
        onPress={askLocationPermission}
        />
        <Text style={styles.text}>{JSON.stringify(permissions,null,5)}</Text>       
    </View>
    );
};

export default PermissionsScreen;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    text:{
        color:'#000'
    }
});
