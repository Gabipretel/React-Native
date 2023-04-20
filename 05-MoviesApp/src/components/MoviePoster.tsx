import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native';


interface Props {
    movie: Movie;
    width?: number;
    height?: number;
}

const MoviePoster = ({ movie, width = 300,height = 420 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path} `
    const navigation= useNavigation()
    
    return (
        <TouchableOpacity
        onPress={ ()=> navigation.navigate('DetailScreen', movie)}
        activeOpacity={0.8}
        style={{
            width,
            height,
            marginHorizontal:40
        }}>
            <View style={styles.imageShadow}>
                <Image
                    source={{ uri: uri }}
                    style={styles.posterImg}
                />
            </View>
        </TouchableOpacity>
    )
}

export default MoviePoster

