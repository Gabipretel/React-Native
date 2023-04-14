import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import Carousel from 'react-native-snap-carousel';
import { styles } from '../theme/appTheme'
import useMovies from '../hooks/useMovies'
import MoviePoster from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


interface Props extends StackScreenProps<any, any> { }

const HomeScreen = ({ navigation }: Props) => {

 const {top}= useSafeAreaInsets()
  const { moviesInCinema, isLoading } = useMovies()

  // console.log(JSON.stringify(moviesInCinema,null,3))
  if (isLoading) {
    return (
      <View style={styles.position}>
        <ActivityIndicator color='blue' size={100} />
      </View>
    )
  }

  return (
    // <View style={{marginTop:top+20}}>
    //   < MoviePoster movie={moviesInCinema[0]} />
    // </View>
    <Carousel
    data={moviesInCinema}
    renderItem={() => < MoviePoster movie={moviesInCinema[0]} /> }
    sliderWidth={550}
    itemWidth={200}
     />
  )
}

export default HomeScreen

{/* <Text style={styles.title}>HomeScreen</Text>

<TouchableOpacity onPress={() => navigation.navigate('DetailScreen')} >
  <Text style={styles.title}>Next</Text>
</TouchableOpacity> */}