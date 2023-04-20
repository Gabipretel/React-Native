import { View, ActivityIndicator, Dimensions,ScrollView } from 'react-native'
import React from 'react'
import Carousel from 'react-native-new-snap-carousel'
import { styles } from '../theme/appTheme'
import useMovies from '../hooks/useMovies'
import MoviePoster from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HorizontalSlider from '../components/HorizontalSlider'

const { width: windowWidth } = Dimensions.get('window')

const HomeScreen = () => {

  const { top } = useSafeAreaInsets()
  const { nowPlaying,popular,topRated,upcoming,isLoading } = useMovies()

  if (isLoading) {
    return (
      <View style={styles.position}>
        <ActivityIndicator color='blue' size={100} />
      </View>
    )
  }

  return (
    <ScrollView>
      {/* Carousel Cinema Today */}
      <View style={{ marginTop: top + 20 }}>
        <Carousel
          // layout={'tinder'} 
          data={nowPlaying}
          renderItem={({ item }: any) => < MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={200}
          inactiveSlideOpacity={0.9}
        />
      </View>

      <HorizontalSlider title='Populares en Argentina' movies={popular} />
      <HorizontalSlider title='Top valoradas' movies={topRated} />
      <HorizontalSlider title='Proximamente' movies={upcoming} />

    </ScrollView>
  )
}

export default HomeScreen
