import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/EvilIcons'

const Tab1Screen = () => {

    useEffect(() => {
        console.log('first Tab1Screen')
    }, [])
    

  return (
    <View style={styles.globalMargin}>
      <Text style={{color:'red'}}>Tab1Screen</Text>
      <Icon name="" size={50} color='#000'/>
     
    </View>
  )
}

export default Tab1Screen