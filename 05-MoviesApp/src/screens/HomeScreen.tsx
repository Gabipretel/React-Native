import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import {styles} from '../theme/appTheme'
import movieDb from '../api/movieDB'


interface Props extends StackScreenProps<any, any> { }

const HomeScreen = ({navigation}:Props) => {

  useEffect(() => {
    movieDb.get('/now_playing')
    .then(response =>{
      console.log(response)
    })
  }, [])
  

  return (
    <View>
      <Text style={styles.title}>HomeScreen</Text>

      <TouchableOpacity onPress={()=>navigation.navigate('DetailScreen')} >
        <Text style={styles.title}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
