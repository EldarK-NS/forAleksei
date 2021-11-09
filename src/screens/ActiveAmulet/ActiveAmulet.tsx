import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {MainNavigatorParamsList} from '../../navigation/RootNavigator/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface ActiveAmuletProps {
  navigation: NativeStackNavigationProp<
    MainNavigatorParamsList,
    'ActiveAmulet'
  >;
}

const ActiveAmulet: React.FC<ActiveAmuletProps> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [active, setActive] = useState(false);
  const goBack = () => {
    navigation.navigate('AmuletsScreen');
  };

  const handlePress = () => {
    setModalVisible(!modalVisible);
  };
  const handlePressModal = () => {
    setModalVisible(!modalVisible);
    setActive(!active);
  };

  return (
    <View style={styles.container}>
      <Modal animationOut="fadeOut" isVisible={modalVisible}>
        <View style={styles.centeredView}>
          <ImageBackground
            source={require('../../assets/images/modal_fon.png')}>
            <View style={styles.modal_view}>
              <Image
                source={require('../../assets/images/pattern_small_up.png')}
                style={styles.pattern_modal}
              />
              <Text style={styles.modal_title}>Поздравляем!</Text>
              <Text style={styles.modal_subtitle}>Амулет активирован</Text>
              <Text style={[styles.modal_subtitle, {marginTop: 20}]}>
                Теперь Денежная сила будет сопровождать вас на протяжение 24
                часов
              </Text>
              <TouchableOpacity
                style={[
                  styles.blocks,
                  {
                    borderWidth: 10,
                    width: 200,
                    height: 60,
                    marginTop: 20,
                    backgroundColor: 'rgba(0,0,0,.4)',
                  },
                ]}
                onPress={handlePressModal}>
                <Text style={[styles.block_text, {fontSize: 24}]}>
                  Благодарю
                </Text>
              </TouchableOpacity>
              <Image
                source={require('../../assets/images/pattern_small_down.png')}
                style={styles.pattern_modal}
              />
            </View>
          </ImageBackground>
        </View>
      </Modal>
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
        <View style={styles.main_block}>
          <Image
            source={require('../../assets/images/amulet_big.png')}
            style={styles.amulet}
          />
          <Text style={styles.amulet_title}>Амулет Джонсона</Text>
          <TouchableOpacity style={styles.blocks} onPress={handlePress}>
            <Text style={styles.block_text}>
              {!active ? 'Активировать' : 'Активировано'}
            </Text>
          </TouchableOpacity>
          <View style={styles.text_block}>
            <Text style={styles.info}>
              Амулет принесет рыба текст невероятно удача победа на вашей
              стороне ха вот так вот
            </Text>
          </View>
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

export default ActiveAmulet;

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
  },
  blocks: {
    borderWidth: 10,
    borderColor: 'rgb(211, 142, 44)',
    width: 350,
    height: 101,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  block_text: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
  },
  main_block: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  amulet: {
    width: 250,
    height: 290,
  },
  amulet_title: {
    fontSize: 20,
    lineHeight: 24,
    color: 'rgb(211, 142, 44)',
  },
  text_block: {
    width: 300,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    textAlign: 'center',
    color: 'rgb(211, 142, 44)',
    fontSize: 20,
    lineHeight: 28,
  },
  centeredView: {
    flex: 1,
    marginTop: 200,
    alignItems: 'center',
    // marginTop: 22,
  },
  modal_view: {
    width: 350,
    height: 450,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pattern_modal: {
    width: '90%',
    height: 40,
    marginVertical: 20,
  },
  modal_title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
  },
  modal_subtitle: {
    fontSize: 23,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
