import React, {useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6]);

  const renderItems = (item:number) => {
    <Text style={styles.textItem}>{item}</Text>;
  };

  return (
    <View>
      <HeaderTitle title="InfiniteScrollScreen" />
      <FlatList
        data={numbers}
        renderItem={({item}) => renderItems(item)}
        keyExtractor={(item)=> item.toString() }
      />
    </View>
  );
};

export default InfiniteScrollScreen;

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});
