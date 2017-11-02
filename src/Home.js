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
    const {navigation} = this.props;
    return <View style={s.container}>
      {this.renderSection(s.slow, 'Slow animation', 'SlowAnimation')}

      {this.renderSection(s.fast, 'Native animation', 'NativeAnimation')}

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
    fontSize: 23,
    color: 'white',
  },
  slow: {
    backgroundColor: colors.deepPurple['500'],
  },
  fast: {
    backgroundColor: colors.indigo['500'],
  },
  game: {
    backgroundColor: colors.blueGrey['500'],
  },
});