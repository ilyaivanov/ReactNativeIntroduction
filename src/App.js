import React from 'react';
import {StatusBar, StyleSheet, View, Platform} from 'react-native';
import {StackNavigator} from 'react-navigation';
import colors from './colors';
import Game from './game/Game';
import Home from './Home';
import AnimationExample from './AnimationExample';

const headerProps = {
  headerStyle: {
    backgroundColor: colors.blueGrey['200'],
  },
};

const App = StackNavigator({
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
  AnimationExample: {
    screen: AnimationExample,
    navigationOptions: ({navigation}) => ({
      title: `Animation`,

      ...headerProps
    }),
  },
});

export default class Shell extends React.Component {
  render() {
    return <View style={s.shell}>
      <StatusBar translucent={true}/>
      <App/>
    </View>;
  }
}
const s = StyleSheet.create({
  shell: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});