import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {movieDetailsStyles} from '../screens/DetailScreen';
import {MovieFullDetails} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import CastItem from './CastItem';
interface Props {
  movieFullDetails: MovieFullDetails;
  cast: Cast[];
}
const MovieDetails = ({movieFullDetails, cast}: Props) => {
  return (
    <>
      <View style={movieDetailsStyles.subtitleText}>
        <Text style={movieDetailsStyles.text}>
          {movieFullDetails.original_title}
        </Text>

        <Text style={movieDetailsStyles.title}>{movieFullDetails.title}</Text>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginBottom: 10,
            marginTop: 10,
          }}>
          <Text style={movieDetailsStyles.description}>
            {movieFullDetails.vote_average}
          </Text>
          <Icon
            style={{marginHorizontal: 6}}
            name="star"
            size={20}
            color="#900"
          />
        </View>

        <Text style={{marginBottom: 10}}>
          {movieFullDetails.genres.map(g => g.name).join(' ')}
        </Text>

        <Text style={{fontSize: 20, marginBottom: 10, fontWeight: '700'}}>
          Historia
        </Text>

        <Text style={movieDetailsStyles.description}>
          {movieFullDetails.overview}
        </Text>

        <Text
          style={{
            fontSize: 20,
            marginBottom: 10,
            marginTop: 10,
            fontWeight: '700',
          }}>
          Presupuesto
        </Text>

        <Text style={movieDetailsStyles.description}>
          {currencyFormatter.format(movieFullDetails.budget, {code: 'USD'})}
        </Text>

        <View>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 10,
              marginTop: 10,
              fontWeight: '700',
            }}>
            Actores
          </Text>

            <FlatList
            data={cast}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=> <CastItem actor={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
             />
       


        </View>
      </View>
    </>
  );
};

export default MovieDetails;
