import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/StackNavigator'
//FORMA 1 PARa traer info pasada por el navigate
// DESCOMENTAR PARA FORMA 1.
// interface RouterParams{
//   id:number;
//   name:string;
//   lastName:string;
// }

// Forma 2 en pag4 y en stackNavigator.

interface Props extends StackScreenProps<RootStackParams,'Pagina4Screen'>{}

const Pagina4Screen = (props:Props) => {
  // console.log(JSON.stringify(props,null,3))
  // console.log(props.route.params)
  
  const params= props.route.params 
  // DESCOMENTAR PARA FORMA 1
  // const params= props.route.params as RouterParams
  // console.log(params, 'viene de params..')
  useEffect(() => {
   props.navigation.setOptions({
    title: params.name
   })
  }, [])
  

  return (
    <View>
      <Text style={styles.title}>Pagina4Screen</Text>
      <Text style={styles.title}>{JSON.stringify(params,null,3)}</Text>
    </View>
  )
}

export default Pagina4Screen