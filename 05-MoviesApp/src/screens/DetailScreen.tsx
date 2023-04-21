import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMovieDetails} from '../hooks/useMovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({navigation, route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path} `;
  const {isLoading,cast,MovieFullDetails} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.containerDetails}>
        <Image source={{uri: uri}} style={styles.posterImgDetail} />
      </View>

      <View style={styles.subtitleText}>
        <Text style={styles.text}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginBottom: 10,
            marginTop: 10,
          }}>
          <Text style={styles.description}>{movie.vote_average}</Text>
          <Icon
            style={{marginHorizontal: 6}}
            name="star"
            size={20}
            color="#900"
          />
        </View>

        <Text style={styles.description}>{movie.overview}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  containerDetails: {
    width: '100%',
  },
  posterImgDetail: {
    width: '100%',
    height: screenHeight * 0.7,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  subtitleText: {
    marginTop: 20,
    marginHorizontal: 40,
  },
  text: {
    fontSize: 10,
    letterSpacing: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  description: {
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: 2,
  },
});
