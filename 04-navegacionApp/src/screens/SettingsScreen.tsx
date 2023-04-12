import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'
import Icon from 'react-native-vector-icons/Ionicons'

const SettingsScreen = () => {

  const insets = useSafeAreaInsets()

  // const context = useContext(AuthContext)
  const { authState } = useContext(AuthContext)

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top + 20
    }}>
      <Text style={styles.title}>SettingsScreen en proceso</Text>
      <Text style={styles.title}>{JSON.stringify(authState, null, 4)}</Text>
      {
        authState.favoriteIcon && <Icon name={authState.favoriteIcon} size={40} color='red' />
      }
    </View>
  )
}

export default SettingsScreen