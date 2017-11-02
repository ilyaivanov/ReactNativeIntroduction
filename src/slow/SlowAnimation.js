import React from 'react';
import {WebView} from 'react-native';

const PolicyHTML = require('./animated.html');

export default () => (
  <WebView
    source={PolicyHTML}
    style={{flex: 1}}
  />
)