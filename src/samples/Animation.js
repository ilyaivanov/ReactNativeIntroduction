import React from 'react';
import {Animated, Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from '../colors';

const duration = 2500;
const size = 75;

export default class Animation extends React.Component {
  isAnimating = false;
  state = {
    animation: new Animated.Value(0),
  };

  animate = () => {
    if (this.isAnimating)
      return;

    this.isAnimating = true;

    const onEnd = () => Animated.timing(this.state.animation, {
      toValue: 0,
      duration,
    }).start(() => this.isAnimating = false);
    Animated.timing(this.state.animation, {toValue: 1, duration}).start(onEnd);
  };

  render() {
    const backgroundColor = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.blueGrey['900'], colors.blueGrey['200']],
    });

    const screenWidth = Dimensions.get('window').width;
    const width = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [size, screenWidth],
    });
    const height = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [size, screenWidth],
    });

    const color = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.lightText.primary, colors.darkText.primary],
    });

    const fontSize = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 50],
    });

    return (
      <TouchableOpacity style={s.container} onPress={this.animate}>
        <Animated.View style={[s.box, {backgroundColor, width, height}]}>
          <Animated.Text style={{color, fontSize}}>Press</Animated.Text>
        </Animated.View>
      </TouchableOpacity>
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
    backgroundColor: colors.indigo['500'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
  },
});