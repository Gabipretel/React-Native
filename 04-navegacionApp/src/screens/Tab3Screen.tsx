import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const Tab3Screen = () => {
    
    useEffect(() => {
        console.log('first Tab3Screen')
    }, [])

  return (
    <View>
      <Text>Tab3Screen</Text>
    </View>
  )
}

export default Tab3Screen