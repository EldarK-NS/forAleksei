import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image,
} from 'react-native';
import {MainNavigatorParamsList} from '../../navigation/RootNavigator/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface AmuletsScreenProps {
  navigation: NativeStackNavigationProp<MainNavigatorParamsList, 'Home'>;
}

const AmuletsScreen: React.FC<AmuletsScreenProps> = ({navigation}) => {
  const goBack = () => {
    navigation.navigate('Home');
  };

  const handlePress = () => {
    navigation.navigate('ActiveAmulet');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/fon.png')}
        resizeMode="cover"
        style={styles.image}>
        <Pressable onPress={goBack}>
          <Image
            source={require('../../assets/images/arrow-back.png')}
            style={styles.arrow}
          />
        </Pressable>

        <View style={styles.row}>
          <Pressable style={styles.row_item} onPress={handlePress}>
            <Image
              source={require('../../assets/images/amulet.png')}
              style={styles.amulet}
            />
            <Text style={styles.amulet_title}>Амулет Джонсона</Text>
          </Pressable>
          <Pressable style={styles.row_item} onPress={handlePress}>
            <Image
              source={require('../../assets/images/amulet.png')}
              style={styles.amulet}
            />
            <Text style={styles.amulet_title}>Амулет Джонсона</Text>
          </Pressable>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.row_item} onPress={handlePress}>
            <Image
              source={require('../../assets/images/amulet.png')}
              style={styles.amulet}
            />
            <Text style={styles.amulet_title}>Амулет Джонсона</Text>
          </Pressable>
          <Pressable style={styles.row_item} onPress={handlePress}>
            <Image
              source={require('../../assets/images/amulet.png')}
              style={styles.amulet}
            />
            <Text style={styles.amulet_title}>Амулет Джонсона</Text>
          </Pressable>
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/pattern_1.png')}
            style={styles.pattern}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default AmuletsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
  },
  arrow: {
    marginTop: 15,
    marginLeft: 15,
  },
  pattern: {
    width: 360,
    height: 65,
    zIndex: 100,
    marginTop: 30,
    marginBottom: 20,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  row_item: {
    width: 170,
    height: 244,
    backgroundColor: 'rgba(0,0,0,.4)',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  amulet: {
    marginTop: 21,
  },
  amulet_title: {
    color: 'rgb(211, 142, 44)',
    fontSize: 14,
    lineHeight: 16,
  },
});
