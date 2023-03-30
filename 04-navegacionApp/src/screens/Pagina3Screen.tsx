import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'



// POP lleva a la pagina anterior y POP TO TOP a la pag de inicio.

interface Props extends StackScreenProps<any, any> { }

const Pagina3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina3Screen</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.pop()}
      >
        <Text>Toque aqui para regresar </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.popToTop()}>
        <Text>Pagina home 1 </Text>
      </TouchableOpacity>

    </View>
  )
}

export default Pagina3Screen