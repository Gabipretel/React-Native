import { View, Animated, PanResponder} from 'react-native'
import React,{useRef} from 'react'
import { animationStyle } from '../theme/appTheme'

const AnimationScreen02 = () => {

  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ],{
      useNativeDriver:false
    }),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });

  return (
    <View style={animationStyle.containerbox}>
     <Animated.View 
     {...panResponder.panHandlers}
     style={[pan.getLayout(), animationStyle.colorBox]}
     />
    </View>
  )

}

export default AnimationScreen02


