import {View, Text, Image} from 'react-native';
import React from 'react';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path} `;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#e1e1e1',
        borderRadius: 10,
        marginBottom: 20,
        marginHorizontal:8
      }}>
      {actor.profile_path && (
        <Image
          source={{uri}}
          style={{width: 50, height: 50, borderRadius: 10}}
        />
      )}
      <View style={{marginHorizontal: 10}}>
        <Text style={{fontSize: 18, fontWeight: '700'}}>{actor.name} </Text>
        <Text style={{fontSize: 16, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CastItem;
