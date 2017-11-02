import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from './colors';

export default class Home extends React.Component {
  renderSection = (style, text, targetScreen) => (
    <TouchableOpacity style={[s.section, style]} onPress={() => this.props.navigation.navigate(targetScreen)}>
      <Text style={s.title}>{text}</Text>
    </TouchableOpacity>
  );

  render() {
    return <View style={s.container}>
      {this.renderSection(s.fast, 'Animation Example', 'AnimationExample')}

      {this.renderSection(s.game, 'Game', 'Game')}
    </View>;
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: 'white',
  },
  fast: {
    backgroundColor: colors.indigo['500'],
  },
  game: {
    backgroundColor: colors.blueGrey['500'],
  },
});