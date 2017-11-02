import React from 'react';
import {View} from 'react-native';

export default class StaticBox extends React.Component {
  render() {
    return <View style={s.container}>
      <View style={s.box}/>
    </View>;
  }
}

const s = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 75,
    width: 75,
    backgroundColor: 'black',
  },
};