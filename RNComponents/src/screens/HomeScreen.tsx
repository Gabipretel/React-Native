import {View, FlatList} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import {MenuItem} from '../interface/interfaces';
import FlatListMenuItem from '../components/FlatListMenuItem';
import HeaderTitle from '../components/HeaderTitle';
import { ItemSeparator} from '../components/ItemSeparator';
import { menuItems } from '../components/MenuItems';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#C7C7A6'}}>
      <View style={styles.globalMargin}>
        <FlatList
          data={menuItems}
          renderItem={({item}) => <FlatListMenuItem menuItems={item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => <HeaderTitle title="Opciones de Menú" /> }
          ItemSeparatorComponent={()=> <ItemSeparator/>}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
