import React from 'react';
import {Alert, Button, Platform, StatusBar, Text, View} from 'react-native';
import MyComponent from './MyComponent';

export default () => (
  <View style={s.container}>
    <StatusBar barStyle="light-content" animated/>
    <Text>Running on {Platform.OS}</Text>
    <Button title="My Button" onPress={() => Alert.alert('Button was pressed')}/>
    <MyComponent/>
  </View>
)

const s = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
};