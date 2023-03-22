import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const InicioScreen =()=> {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido !</Text>
    </View>
  )
}
export default InicioScreen

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#8FD694",
    justifyContent:'center',
    // alignItems:'center'

  },
  text:{
    fontSize:40,
    textAlign:'center'
  }
})