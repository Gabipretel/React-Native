import React, {useState} from 'react';
import {View, ScrollView, RefreshControl, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';

const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => { // Vuelvo a llamar a la API y va a refrescar el estado guardando la nueva info en un state y mostrandola..
    setRefreshing(true);
    setTimeout(() => {
      console.log('termina el refreshing!');
      setRefreshing(false);
      setData('data...')
    }, 2000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={20} // baja el refreshing, se ve en la screen.
          progressBackgroundColor={'red'} // fondo del pull-Refresh 
          colors={['white','green','white']}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to Refresh" />
        <HeaderTitle title={data ?? ''}/>
        <Text>{data}</Text>
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
