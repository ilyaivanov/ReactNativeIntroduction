import React, {Component} from 'react';
import {Text, View, Animated, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../colors';

export default class Cell extends Component {
  componentWillMount = () => {
    this.setState({
      colorAnimated: new Animated.Value(this.props.enabled ? 1 : 0),
    });
  };

  shouldComponentUpdate = () => false;

  componentWillReceiveProps(newProps) {
    if (newProps.enabled)
      Animated.timing(this.state.colorAnimated, {toValue: 1, duration: 100}).start();
    else
      Animated.timing(this.state.colorAnimated, {toValue: 0, duration: 100}).start();
  }

  render() {
    const backgroundColor = this.state.colorAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.grey['400'], colors.blueGrey['500']],
    });

    const {style, onPress} = this.props;
    return <TouchableOpacity style={[s.cellContainer, style]} onPress={onPress}>
      <Animated.View style={[s.cellContainer, {backgroundColor}]}>
      </Animated.View>
    </TouchableOpacity>;
  }
}

const s = StyleSheet.create({
  cellContainer: {
    flex: 1,
    margin: 2,
    borderRadius: 8,
  },
});