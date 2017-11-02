import React from 'react';
import {Text, View} from 'react-native';
import colors from '../../colors';

export default () => (
  <View style={s.container}>
    <Text>My Custom Android Component</Text>
  </View>
);

const s = {
  container: {
    padding: 10,
    backgroundColor: colors.blue['500'],
  },
};