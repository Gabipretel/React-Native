import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {Movie} from '../interfaces/movieInterface';

interface Props extends StackScreenProps<any, any> {}

const DetailScreen = ({navigation, route}: Props) => {
  const movie = route.params as Movie;
  console.log(movie);

  return (
    <View>
      <Text style={styles.title}>DetailScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.title}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;
