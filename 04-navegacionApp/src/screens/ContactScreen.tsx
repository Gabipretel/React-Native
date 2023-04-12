import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native'
import { AuthContext } from '../context/AuthContext'

const ContactScreen = () => {

  const { signIn, authState } = useContext(AuthContext)


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactScreen</Text>


      {/* {
        authState.isLoggedIn 
        ?
        <Text>Bienvenido {authState.username}</Text>
          :
          <TouchableOpacity
            onPress={signIn}
          >
            <Text>SignIn</Text>
          </TouchableOpacity>
      } */}

      {
        !authState.isLoggedIn && 
        <TouchableOpacity onPress={signIn}>
          <Text style={{backgroundColor:'red', width:100,height:50, color:'#000', borderRadius:10}}>SignIn</Text>
        </TouchableOpacity>
      }
    </View>
  )
}

export default ContactScreen