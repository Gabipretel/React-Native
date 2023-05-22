import {View, FlatList} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import {MenuItem} from '../interface/interfaces';
import FlatListMenuItem from '../components/FlatListMenuItem';
import HeaderTitle from '../components/HeaderTitle';

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
    icon: 'alert-circle',
    components: 'SwitchScreen',
  },
  {
    id: '4',
    name: 'Alerts',
    icon: 'toggle',
    components: 'AlertScreen',
  },
  {
    id: '5',
    name: 'TextInputScreen',
    icon: 'document-text',
    components: 'TextInputScreen',
  }, 
  {
    id: '6',
    name: 'Pull To Refresh',
    icon: 'refresh',
    components: 'PullToRefreshScreen',
  }, 
  {
    id: '7',
    name: 'MyTopModal',
    icon: 'copy',
    components: 'MyTopModalScreen',
  },
  
];

const HomeScreen = () => {
  const itemSeparator = () => {
    return (
      <View style={{borderBottomWidth: 2, opacity: 0.4, marginVertical: 8}} />
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#C7C7A6'}}>
      <View style={styles.globalMargin}>
        <FlatList
          data={menuItems}
          renderItem={({item}) => <FlatListMenuItem menuItems={item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => <HeaderTitle title="Opciones de Menú" /> }
          ItemSeparatorComponent={itemSeparator}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
