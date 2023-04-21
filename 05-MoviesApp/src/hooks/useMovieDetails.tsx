import {useEffect, useState} from 'react';
import movieDb from '../api/movieDB';
import {MovieFullDetails} from '../interfaces/movieInterface';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  MovieFullDetails?: MovieFullDetails
  cast: Cast[];
}


export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading:true,
    MovieFullDetails: undefined,
    cast: []
  });

  const getMovieDetails = async () => {
    const creditsResponse = movieDb.get<CreditsResponse>(`/${movieId}/credits`)  
    const movieDetailResponse =  movieDb.get<MovieFullDetails>(`/${movieId}`);

    const [castResponse, movieDetailsResponse]=  await Promise.all([creditsResponse,movieDetailResponse])

    setState({
        isLoading:false,
        MovieFullDetails: movieDetailsResponse.data,
        cast: castResponse.data.cast
    })
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state
  }
};
