import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MyButton: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>MyButton</Text>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
