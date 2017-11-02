import React from 'react';
import {StackNavigator} from 'react-navigation';
import colors from './colors';
import Game from './game/Game';
import Home from './Home';
import NativeAnimation from './NativeAnimation';
import SlowAnimation from './slow/SlowAnimation';

const headerProps = {
  headerStyle: {
    backgroundColor: colors.blueGrey['200'],
  },
};

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: `React Native Intro`,

      ...headerProps
    }),
  },
  Game: {
    screen: Game,
    navigationOptions: ({navigation}) => ({
      title: `Switch game`,

      ...headerProps
    }),
  },
  NativeAnimation: {
    screen: NativeAnimation,
    navigationOptions: ({navigation}) => ({
      title: `Native Animation`,

      ...headerProps
    }),
  },
  SlowAnimation: {
    screen: SlowAnimation,
    navigationOptions: ({navigation}) => ({
      title: `Slow Animation`,

      ...headerProps
    }),
  },
});
