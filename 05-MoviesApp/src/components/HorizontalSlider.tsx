import { View, Text, FlatList } from 'react-native'
import React from 'react'
import MoviePoster from './MoviePoster'
import { styles } from '../theme/appTheme'
import { Movie } from '../interfaces/movieInterface'


interface Props {
    title?: string;
    movies: Movie[]
}

const HorizontalSlider = ({ title, movies }: Props) => {

    return (
        <>
            <View style={styles.containerPopularMovies}>
                {
                    title && <Text style={styles.subtitle}>{title}</Text>
                }

                <FlatList
                    data={movies}
                    renderItem={({ item }: any) => < MoviePoster width={140} height={300} movie={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </>
    )
}

export default HorizontalSlider