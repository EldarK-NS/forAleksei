import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MyTextInput: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>MyTextInput</Text>
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
