import React from 'react';
import {View, Animated, Button} from 'react-native';
import {animationStyle} from '../theme/appTheme';
import useAnimation from '../hooks/useAnimation';

const AnimationScreen01 = () => {
  const {fadeIn,fadeOut,startMoving,opacity,position}=useAnimation()
 
  return (
    <View style={animationStyle.containerbox}>
      <Animated.View style={{...animationStyle.colorBox, opacity,marginBottom:20,transform:[{
        translateY:position
      }]}} />
      <Button title="fadeIn" onPress={()=>{
        fadeIn();
        startMoving(-100)

      }} />
      <Button title="fadeOut" onPress={fadeOut} />
    </View>
  );
};

export default AnimationScreen01;
