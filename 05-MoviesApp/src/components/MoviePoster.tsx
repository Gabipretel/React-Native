import { View, Text, Image } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import { styles } from '../theme/appTheme'


interface Props {
    movie: Movie
}

const MoviePoster = ({ movie }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path} `

    return (
        <View style={styles.containerPoster}>
            <View style={styles.imageShadow}>
                <Image
                    source={{ uri: uri }}
                    style={styles.posterImg}
                />
            </View>
        </View>
    )
}

export default MoviePoster

