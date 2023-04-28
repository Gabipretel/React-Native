import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {MenuItem} from '../interface/interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface Props {
  menuItems: MenuItem;
}

const FlatListMenuItem = ({menuItems}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
		 activeOpacity={0.8}
		 onPress={()=>navigation.navigate(menuItems.components as never)}
		 >
      <View style={styles.container}>
        <Icon name={menuItems.icon} size={30} color="#464655" />
        <Text style={styles.textIcon}>{menuItems.name}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward" size={30} color="#464655" />
      </View>
    </TouchableOpacity>
  );
};

export default FlatListMenuItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  textIcon: {
    fontSize: 20,
    marginLeft: 16,
  },
});
