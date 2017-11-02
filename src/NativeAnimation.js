import React from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from './colors';

const duration = 2500;

export default class Fast extends React.Component {
  isAnimating = false;
  state = {
    animation: new Animated.Value(0), //0 .. 1
  };

  animate = () => {
    if (this.isAnimating)
      return;

    this.isAnimating = true;

    const onEnd = () => Animated.timing(this.state.animation, {toValue: 0, duration}).start(() => this.isAnimating = false);
    const s = Animated.timing(this.state.animation, {toValue: 1, duration}).start(onEnd);
  };

  render() {
    const rotate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '3600deg'],
    });

    const scale = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 3],
    });
    const transform = [
      {rotate},
      {scale},
    ];

    return (
      <View style={s.container}>
        <Animated.View style={[s.box, {transform}]}>
          <TouchableOpacity style={[s.box]} onPress={this.animate}/>
        </Animated.View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  box: {
    width: 75,
    height: 75,
    backgroundColor: colors.indigo['500'],
  },
});