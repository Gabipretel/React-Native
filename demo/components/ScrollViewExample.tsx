import React from 'react'
import { Image, ScrollView, Text, TextInput, View } from 'react-native'

const ScrollViewExample = () => {
  return (

    <ScrollView>
      <Text>ScrollView </Text>
      <View>
        <Text>
          Nombre:
        </Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput style={{
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,

      }} />
    </ScrollView>

  )
}

export default ScrollViewExample
