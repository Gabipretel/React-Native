import React from 'react'
import { View } from 'react-native'
import { styles } from '../theme/appTheme'
import HeaderTitle from '../components/HeaderTitle'

const PullToRefreshScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Pull to Refresh' />
    </View>
  )
}

export default PullToRefreshScreen