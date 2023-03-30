import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native'

//  
const Pagina2Screen = () => {

  //  Este hook trae el objeto de la navegación.
  const navigation= useNavigation()

  useEffect(() => {
    navigation.setOptions({
      title:'useEFFECT y especificidad',
      // IOS PARa q diga atras...en el header.

      headerBackTitle:''
    })
  }, [])
  
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>pagina2Screen</Text>

      <TouchableOpacity 
      style={styles.btn} 
      onPress={()=>navigation.navigate('Pagina3Screen')}
      >
        <Text>Pagina 3</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Pagina2Screen