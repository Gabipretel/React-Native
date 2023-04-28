import {View, Animated} from 'react-native';
import React, {useRef} from 'react';
import {animationStyle} from '../theme/appTheme';

const AnimationScreen01 = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;

  return (
    <View style={animationStyle.containerbox}>
      <Animated.View style={{...animationStyle.colorBox, opacity}} />
    </View>
  );
};

export default AnimationScreen01;
