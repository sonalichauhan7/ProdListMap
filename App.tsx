/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Navigator from './src/navigation';

function App(): React.JSX.Element {

  return (
    <View style={{ flex: 1 }}>
      <Navigator />
    </View>
  );
}

export default App;
