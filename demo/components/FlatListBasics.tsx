import React from 'react'
import { FlatList, Text, View } from 'react-native'

const FlatListBasics = () => {


interface Info{
    key: string
}

    let info: Info[]= [
        {key: 'Devin'},
        {key: 'Dan'},
        {key: 'Dominic'},
      ]
    return (
        <View >
          <FlatList
            data={info}
            renderItem={({item}) => <Text>{item.key}</Text>}
          />
        </View>
      );
}

export default FlatListBasics