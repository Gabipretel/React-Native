import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMovieDetails} from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({navigation, route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path} `;
  const {isLoading, cast, MovieFullDetails} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={movieDetailsStyles.containerDetails}>
        <Image source={{uri: uri}} style={movieDetailsStyles.posterImgDetail} />
      </View>

      {isLoading ? (
        <ActivityIndicator size={35} color="grey" style={{marginTop: 30}} />
      ) : (
        <MovieDetails movieFullDetails={MovieFullDetails!} cast={cast} />
      )}

      <View
        style={{
          position: 'absolute',
          elevation: 9,
          top: 20,
          left: 5,
        }}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" size={40} style={{color:'#FFF'}} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

export const movieDetailsStyles = StyleSheet.create({
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
