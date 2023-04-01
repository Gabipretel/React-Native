import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import StackNavigator from './StackNavigator'
import SettingsScreen from '../screens/SettingsScreen'
import { styles } from '../theme/appTheme'


// Menu lateral básico 
const Drawer = createDrawerNavigator()

const DrawerNavigatorPersonalizado = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: 'left',
                headerShown: true,
            }}
            drawerContent={(props) => <MenuInterno {...props} />}

        >
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigatorPersonalizado


const MenuInterno = (props: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView>
            {/* Contenedor Avatar */}
            <View style={styles.avatarContainer}>

                <Image source={{
                    uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg'

                }}
                    style={styles.avatar}
                />
            </View>

            {/* Opciones de Menu */}
            <View style={styles.menuContainer}>
                <TouchableOpacity onPress={()=> props.navigation.navigate('StackNavigator')} >
                    <Text style={styles.menuText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> props.navigation.navigate('SettingsScreen')} >
                    <Text style={styles.menuText}>Settings</Text>
                </TouchableOpacity>


            </View>
        </DrawerContentScrollView>

    );
}