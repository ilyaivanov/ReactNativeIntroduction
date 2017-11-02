import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

export default class StaticBox extends React.Component {

  state = {timesClicked: 0};

  onClick = () =>
    this.setState({timesClicked: this.state.timesClicked + 1});

  render() {
    return <View style={s.container}>
      <TouchableOpacity style={s.box} onPress={this.onClick}>
        <Text style={s.title}>{this.state.timesClicked}</Text>
      </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
    color: 'white',
  },
};