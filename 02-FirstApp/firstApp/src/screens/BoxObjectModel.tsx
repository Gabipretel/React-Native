import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxObjectModel = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>probando styles</Text>
      <Text style={styles.title}>probando styles</Text>
      <Text style={styles.title}>probando styles</Text>
    </View>
  )
}

export default BoxObjectModel

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#e3e3e3',
  },
  title:{
    fontSize:30,
    backgroundColor: 'orange',
    borderWidth:3,
    padding:20,
    margin:60,


  }
})
