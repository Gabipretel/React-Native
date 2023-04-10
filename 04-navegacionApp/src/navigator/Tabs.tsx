import React from 'react'
import { Text, Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import StackNavigator from './StackNavigator';
import { colors } from '../theme/appTheme';
import TopTabNavigator from './TopTabNavigator';



export const TabGeneral =()=>{

 return Platform.OS === 'ios' ?  <TabsIOS />  : <MyTabsAndroid />
  
}



const BottomTabAndroid = createMaterialBottomTabNavigator();

const  MyTabsAndroid=()=> {
  return (
    <BottomTabAndroid.Navigator
    sceneAnimationEnabled={ true }
    barStyle={{backgroundColor:'colors.turquoise'}}
    screenOptions={({route}) => ({
      tabBarActiveTintColor: colors.turquoise,
      tabBarStyle: {
        borderTopColor: colors.turquoise,
        borderTopWidth: 0,
        elevation: 0,
      },
      tabBarLabelStyle: {
        fontSize: 15,
      },
      tabBarIcon: ({color, focused,}) => {
        let iconName: string = '';
        switch(route.name) {
          case 'Tab1Screen' :
            iconName = 'T1'
            break;

          case 'Tab2Screen' :
            iconName = 'T2'
            break;

          case 'StackNavigator' :
            iconName = 'ST'
            break;
        }
        return <Text style={{color}}>{ iconName }</Text>
    }
    })}
    >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{title:'tab1'}} component={ Tab1Screen } />
            <BottomTabAndroid.Screen name="Tab2Screen" options={{title:'tab2'}} component={ TopTabNavigator } />
            <BottomTabAndroid.Screen name="StackNavigator"  options={{title:'Stack'}}component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
}




const Tab= createBottomTabNavigator()

const TabsIOS = () => {
    return (
        <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor:'#fff',
            elevation:8
        }}
        // screenOptions={{
        //     tabBarActiveTintColor:'blue',
        //     tabBarStyle:{
        //         borderTopColor:colors.turquoise,
        //         borderTopWidth:1,
        //         elevation:0
        //     },
        //     tabBarLabelStyle:{
        //         fontSize:10
        //     }
        // }}
        screenOptions={({route}) => ({
            tabBarActiveTintColor: colors.turquoise,
            tabBarStyle: {
              borderTopColor: colors.turquoise,
              borderTopWidth: 0,
              elevation: 0,
            },
            tabBarLabelStyle: {
              fontSize: 15,
            },
            tabBarIcon: ({color, focused, size}) => {
              let iconName: string = '';
              switch(route.name) {
                case 'Tab1Screen' :
                  iconName = 'T1'
                  break;
     
                case 'Tab2Screen' :
                  iconName = 'T2'
                  break;
     
                case 'StackNavigator' :
                  iconName = 'ST'
                  break;
              }
              return <Text style={{color}}>{ iconName }</Text>
          }
          })}
         
        >
            {/* <Tab.Screen name="Tab1Screen" options={{title:'tab1', tabBarIcon:(props)=> <Text style={{color:props.color}}>T1</Text>}} component={ Tab1Screen } /> */}
            <Tab.Screen name="Tab1Screen" options={{title:'tab1'}} component={ Tab1Screen } />
            <Tab.Screen name="Tab2Screen" options={{title:'tab2'}} component={ TopTabNavigator } />
            <Tab.Screen name="StackNavigator"  options={{title:'Stack'}}component={ StackNavigator } />
        </Tab.Navigator>
    )
}

export default TabsIOS
