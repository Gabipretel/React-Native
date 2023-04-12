import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../theme/appTheme'
import TouchableIcon from '../components/TouchableIcon'

const Tab1Screen = () => {

    useEffect(() => {
        console.log('first Tab1Screen')
    }, [])
    

  return (
    <View style={{...styles.globalMargin, flexDirection:'row'}}>
      <Text style={{color:'red'}}>Iconos</Text>
      <TouchableIcon iconName='airplane-outline' size={60}/>
      <TouchableIcon iconName='calculator' size={60}/>
  
     
    </View>
  )
}

export default Tab1Screen