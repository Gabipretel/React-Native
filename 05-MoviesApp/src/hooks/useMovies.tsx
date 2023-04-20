import  { useEffect, useState } from 'react'
import { Movie, MovieResponse } from '../interfaces/movieInterface'
import movieDb from '../api/movieDB'

interface MovieState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [movieState, setMoviesState] = useState<MovieState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    })


    const getMovies = async () => {
        setTimeout(async () => {

            const nowPlaying = movieDb.get<MovieResponse>('/now_playing');
            const popular = movieDb.get<MovieResponse>('/popular')
            const topRated = movieDb.get<MovieResponse>('/top_rated')
            const upcoming = movieDb.get<MovieResponse>('upcoming')

            const response = await Promise.all([
                nowPlaying,
                popular,
                topRated,
                upcoming
            ])

            setMoviesState({
                nowPlaying: response[0].data.results,
                popular: response[1].data.results,
                topRated: response[2].data.results,
                upcoming: response[3].data.results
            })

            setIsLoading(false)
        }, 1400);
    }


    useEffect(() => {
        getMovies()
    }, [])


    return {
        ...movieState,
        isLoading
    }
}

export default useMovies