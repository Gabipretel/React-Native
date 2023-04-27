import {View, Text, FlatList} from 'react-native';
import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface MenuItem {
  id: string;
  name: string;
  icon: string;
  components: string;
}

const menuItems = [
  {
    id: '1',
    name: 'Animation 1',
    icon: 'cube',
    components: 'AnimationScreen01',
  },
  {
    id: '2',
    name: 'Animation 2',
    icon: 'cube-outline',
    components: 'AnimationScreen02',
  },
  
];

const HomeScreen = () => {

  const {top} = useSafeAreaInsets();

  const renderItem = (menuItems: MenuItem) => {
    return (
      <View>
        <Text>
          {menuItems.name} - {menuItems.icon}
        </Text>
      </View>
    );
  };

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
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id}
        ListHeaderComponent={ renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
    </View>
  );
};

export default HomeScreen;
