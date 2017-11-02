import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from './colors';

export default class Home extends React.Component {
  renderSection = (backgroundColor, text, targetScreen) => (
    <TouchableOpacity
      style={[s.section, {backgroundColor}]}
      onPress={() => this.props.navigation.navigate(targetScreen)}>
      <Text style={s.title}>{text}</Text>
    </TouchableOpacity>
  );

  render() {
    return <View style={s.container}>
      {this.renderSection(colors.deepPurple['500'], '1. Layout & Styling', 'StaticBox')}
      {this.renderSection(colors.lightBlue['500'], '2. Interaction', 'Interaction')}
      {this.renderSection(colors.indigo['500'], '3. Platform', 'Customization')}
      {this.renderSection(colors.teal['500'], '4. Animation', 'AnimationExample')}
      {this.renderSection(colors.blueGrey['500'], '5. Game', 'Game')}
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
    paddingLeft: 20,
  },
  title: {
    fontSize: 26,
    color: 'white',
  },
});