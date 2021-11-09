import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';

const Home: React.FC = () => {
  const handlePress = () => {
    //
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/fon.png')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.title}>В чем Вы нуждаетесь?</Text>
        <View style={styles.blocksWrapper}>
          <TouchableOpacity style={styles.blocks} onPress={handlePress}>
            <Text style={styles.block_text}>Защита</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blocks} onPress={handlePress}>
            <Text style={styles.block_text}>Удача</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blocks} onPress={handlePress}>
            <Text style={styles.block_text}>Любовь</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blocks} onPress={handlePress}>
            <Text style={styles.block_text}>Сила</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/pattern_1.png')}
            style={styles.pattern}
            resizeMode="contain"
          />
        </View>
        <Pressable onPress={() => console.log('object')}>
          <Text style={styles.policy}>Политика конфиденциальности</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 34,
    lineHeight: 42,
    color: 'rgb(211, 142, 44)',
    marginTop: 30,
  },
  blocks: {
    borderWidth: 10,
    borderColor: 'rgb(211, 142, 44)',
    width: 350,
    height: 101,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    backgroundColor: 'rgba(0,0,0,.4)',
  },
  blocksWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block_text: {
    color: 'rgb(211, 142, 44)',
    fontSize: 38,
  },
  policy: {
    color: 'white',
    textAlign: 'center',
  },
  pattern: {
    width: 360,
    height: 65,
    zIndex: 100,
    marginTop: 30,
    marginBottom: 20,
  },
});

export default Home;
