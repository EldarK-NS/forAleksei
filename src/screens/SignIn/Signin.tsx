import React from 'react';
import {Text, View} from 'react-native';
import {MyTextInput, MyButton} from '../../components';

const Signin: React.FC = () => {
  return (
    <View>
      <Text>Signin</Text>
      <MyTextInput />
      <MyButton />
    </View>
  );
};

export default Signin;

// const styles = StyleSheet.create({})
