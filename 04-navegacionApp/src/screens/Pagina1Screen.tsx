// Navegando a otras pantallas.


import { View, Text, Button } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'

interface Props extends StackScreenProps<any,any>{}

const Pagina1Screen = ({navigation}:Props) => {

  // El clg muestras las props del StackNavigator
  // console.log(props)
  return (
    <View>
      <Text>pagina1Screen</Text>
      <Button
        title='Ir a la pag 2'
        onPress={()=>navigation.navigate('Pagina2Screen') }      
      />
    </View>
  )
}

export default Pagina1Screen