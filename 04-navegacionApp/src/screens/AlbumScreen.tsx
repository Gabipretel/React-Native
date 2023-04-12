import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

const AlbumScreen = () => {


  const { authState, logOut } = useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
      <Text>AlbumScreen</Text>


      {
        authState.isLoggedIn && (
          <TouchableOpacity
            onPress={logOut}
          >
            <Text
              style={{ backgroundColor: 'red', width: 100, height: 50, color: '#000', borderRadius: 10 }}>
              Cerrar Sesión
            </Text>
          </TouchableOpacity>
          )
      }
    </View>
  )
}

export default AlbumScreen