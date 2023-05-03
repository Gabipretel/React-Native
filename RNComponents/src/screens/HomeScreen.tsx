import {View, Text, FlatList} from 'react-native';
import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { MenuItem } from '../interface/interfaces';
import FlatListMenuItem from '../components/FlatListMenuItem';


const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Animation 1',
    icon: 'cube',
    components: 'AnimationScreen01',
  },
  {
    id: '2',
    name: 'Animation 2',
    icon: 'trash',
    components: 'AnimationScreen02',
  },
  {
    id: '3',
    name: 'SwitchScreen',
    icon: 'toggle',
    components: 'SwitchScreen',
  },
];

const HomeScreen = () => {

  const {top} = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={{marginTop:top+20,marginBottom:20}}>
        <Text style={styles.title}>Opciones de Menú</Text>
      </View>
    );
  };

  const itemSeparator =()=>{
    return (
      <View
      style={{borderBottomWidth: 2,opacity:0.4,marginVertical:8}}
      />
    )
  }

  return (
    <View style={{flex:1, backgroundColor: '#C7C7A6'}}>
    <View style={styles.globalMargin}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItems={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={ renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
    </View>
  );
};

export default HomeScreen;
