import {View, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import {GradientContext} from '../context/GrandientContext';
import {Animated} from 'react-native';
import useFade from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({children}: Props) => {
  const {
    colors,
    prevColors,
    setPrevMainColors
  } = useContext(GradientContext);

  const {opacity,fadeIn,fadeOut} = useFade()

  useEffect(() => {
    fadeIn(()=>{
      setPrevMainColors(colors)
      fadeOut()
    })
  }, [colors])
  



  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, '#FFF']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.5}}
      />
      <Animated.View 
      style={{...StyleSheet.absoluteFillObject,
      opacity
      }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, '#FFF']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.5}}
        />
      </Animated.View>
      {children}
    </View>
  );
};

export default GradientBackground;
