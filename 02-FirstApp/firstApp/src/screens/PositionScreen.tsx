import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxG}></View>
      <View style={styles.boxB}></View>
      <View style={styles.boxY}></View>
    </View> 
  )
}

export default PositionScreen

const styles= StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#91A8A4',
        // justifyContent:'center',
        // alignItems:'center'
    },
    boxB:{
        width:100,
        height:100,
        borderWidth:4,
        borderColor: '#fff',
        backgroundColor:'#000',
        position:'absolute',
        bottom:0,
        left:0,
        
    },
    boxY:{
        width:100,
        height:100,
        borderWidth:4,
        borderColor: '#fff',
        backgroundColor: 'yellow',
        position:'absolute',
        right:0

        
    },
    boxG:{
        backgroundColor:'green',
        // position:'absolute',
        // top:0,
        // left:0,
        // right:0,
        // bottom:0
        ...StyleSheet.absoluteFillObject

    }
})