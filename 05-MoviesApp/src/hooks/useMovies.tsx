import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Movie, MovieResponse } from '../interfaces/movieInterface'
import movieDb from '../api/movieDB'

const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [moviesInCinema, setMoviesInCinema] = useState<Movie[]>([])


    const getMovies = async () => {
        setTimeout(async() => {
            const response = await movieDb.get<MovieResponse>('/now_playing');
            setMoviesInCinema(response.data.results)
            setIsLoading(false)

        }, 1400);
    }


    useEffect(() => {
        getMovies()
    }, [])


    return {
        moviesInCinema,
        isLoading
    }
}

export default useMovies