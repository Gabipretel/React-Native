import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  title: {
    color: '#000'
  },
  subtitle:{
    color:'#000',
    fontSize:30,
    fontWeight:'700',
    marginVertical:20,
    marginLeft:20
  },
  position: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerPoster: {
    width: 300,
    height: 420,
  },
  imageShadow: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  posterImg: {
    flex: 1,
    width: 200,
    height: 200,
    borderRadius: 18,
  },
  containerPopularMovies:{
    height:400,

  }

})

