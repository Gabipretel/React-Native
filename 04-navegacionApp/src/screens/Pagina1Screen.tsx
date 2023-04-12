// Navegando a otras pantallas.
import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, {useEffect } from 'react'
// import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'
import { styles } from '../theme/appTheme'
import { DrawerScreenProps } from '@react-navigation/drawer'


// interface Props extends StackScreenProps<any, any> { }
interface Props extends DrawerScreenProps<any, any> { }

const Pagina1Screen = ({ navigation }: Props) => {

    

    // Pasar btn desplegable del drawer. ver para versiones viejas del drawer
    useEffect(() => {
      navigation.setOptions({
        headerLeft: ()=><Button
          title='Menu'
          onPress={()=> navigation.toggleDrawer()}
          />
      })
    }, [])


  // El clg muestras las props del StackNavigator
  // console.log(props)
  return (
    <View style={styles.globalMargin}>

      <Text style={styles.title}>pagina1Screen</Text>

      <TouchableOpacity 
      style={{
        ...styles.btn,
          backgroundColor:'red'
        }} 
      onPress={() => navigation.navigate('Pagina2Screen')}>
          <Text style={styles.btnText}>Pag 2</Text>
      </TouchableOpacity>
   

      <View style={{flexDirection:'row'}}>
        <TouchableOpacity
          style={{
            ...styles.btn,
              backgroundColor:'blue'
            }}
          onPress={() => navigation.navigate('Pagina4Screen', {
            id: 1,
            name: 'Gabi',
            lastName: 'Pretel'
          })}
        >
          <Text style={styles.btnText}>ir Pag 4  Gabi </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Pagina4Screen', {
            id: 1,
            name: 'Maria ',
            lastName: 'Sasa'
          })}
        >
          <Text  style={styles.btnText}> ir Pag 4 Maria. </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Pagina1Screen