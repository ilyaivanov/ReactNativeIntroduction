import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import colors from './colors';

export default class Home extends React.Component {
  render() {
    return <View style={s.container}>
      <StatusBar barStyle="light-content"/>
      <TouchableOpacity style={[s.section, s.slow]}>
        <Text style={s.title}>Slow animation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[s.section, s.fast]}>
        <Text style={s.title}>Native animation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[s.section, s.game]}>
        <Text style={s.title}>Game</Text>
      </TouchableOpacity>
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