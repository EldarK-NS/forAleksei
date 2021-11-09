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
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigation/RootNavigator/RootNavigator';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <RootNavigator />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default App;
