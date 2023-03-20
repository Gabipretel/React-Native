import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

const Flex = () => {
    const styles= StyleSheet.create({
        container: {
          flex:1,
          padding:2,
            flexDirection:'column',
            justifyContent:'center',
        },
        backgroundColor:{
            backgroundColor: "#CBEAA6"
        },
       box:{
        margin:20,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 20,
        textAlign:'center',
       },
       text:{
        fontSize:40,
       }
    })
  return (
    <View style={[styles.container,styles.backgroundColor]}>
        <Text style={[styles.box,styles.text]}>demo1</Text>
        <Text style={[styles.box,styles.text]}>demo2</Text>
        <Text style={[styles.box,styles.text]}>demo3</Text>
    </View>
  )
}

export default Flex



