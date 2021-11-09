/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AmuletsScreen, Home, ActiveAmulet} from './src/screens';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <ActiveAmulet />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default App;
