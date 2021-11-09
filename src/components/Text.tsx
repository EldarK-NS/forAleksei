import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MyText: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>MyText</Text>
    </View>
  );
};

export default MyText;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
