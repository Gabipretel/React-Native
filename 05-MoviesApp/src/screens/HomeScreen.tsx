import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import React, { useContext, useEffect } from 'react';
import Carousel from 'react-native-new-snap-carousel';
import {styles} from '../theme/appTheme';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors';
import {getColors} from '../helpers/getColores';
import { GradientContext } from '../context/GrandientContext';
const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {setMainColors} = useContext(GradientContext)
  
  const getPosterColors = async (index: number) => {
    
      if (isLoading) {
        return (
          <View style={styles.position}>
            <ActivityIndicator color="blue" size={100} />
          </View>
        );
      }
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary= 'green', secondary= 'orange'] = await getColors(uri);
    setMainColors({primary,secondary})
  };

  useEffect(() => {
    if(nowPlaying.length> 0){
      getPosterColors(0)
    }
  }, [nowPlaying])

  return (
    <GradientBackground>
      <ScrollView>
        {/* Carousel Cinema Today */}
        <View style={{marginTop: top + 20}}>
          <Carousel
            // layout={'tinder'}
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={200}
            inactiveSlideOpacity={0.9}
            onSnapToItem={(index: number) => getPosterColors(index)}
          />
        </View>

        <HorizontalSlider title="Populares en Argentina" movies={popular} />
        <HorizontalSlider title="Top valoradas" movies={topRated} />
        <HorizontalSlider title="Proximamente" movies={upcoming} />
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
