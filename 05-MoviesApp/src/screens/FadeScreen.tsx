import {View, Animated, Button} from 'react-native';
import React from 'react';
import useFade from '../hooks/useFade';

const FadeScreen = () => {
    const {opacity,fadeIn,fadeOut}=useFade()
    
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          opacity: opacity,
        }}
      />
      <Button title="FadeIn" onPress={fadeIn} />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

export default FadeScreen;


