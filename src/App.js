import React from 'react';
import {StatusBar, StyleSheet, View, Platform} from 'react-native';
import {StackNavigator} from 'react-navigation';
import colors from './colors';
import Game from './game/Game';
import Home from './Home';
import AnimationExample from './samples/Animation';
import StaticBox from './samples/StaticBox';
import Interaction from './samples/Interaction';
import Customization from './samples/PlatformSpecific/PlatformSpecific';

const headerProps = {
  headerStyle: {
    backgroundColor: colors.blueGrey['200'],
  },
};
const page = (name, component, title) => ({
  [name]: {
    screen: component,
    navigationOptions: ({navigation}) => ({
      title,
      ...headerProps
    }),
  },
});

const App = StackNavigator({
  ...page('Home', Home, 'React Native Introduction'),
  ...page('Game', Game, 'Switch game'),
  ...page('AnimationExample', AnimationExample, 'Animation'),
  ...page('StaticBox', StaticBox, 'Layout & Styling'),
  ...page('Interaction', Interaction, 'Interaction'),
  ...page('Customization', Customization, 'Platform'),
});

export default class Shell extends React.Component {
  render() {
    return <View style={s.shell}>
      <StatusBar translucent={true} />
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