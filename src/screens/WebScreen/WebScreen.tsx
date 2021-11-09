import React, {useState} from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/core';
import {WebView} from 'react-native-webview';
import * as Progress from 'react-native-progress';

const WebScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setLoaded] = useState(false);
  const route = useRoute();
  const link = route.params;
  return (
    <View>
      <View style={{width: '100%', height: '100%'}}>
        {!isLoaded ? (
          <Progress.Bar
            progress={progress}
            width={null}
            borderWidth={0}
            borderRadius={0}
            color={'orange'}
          />
        ) : null}
        <WebView
          source={{
            uri: `${link.data}`,
          }}
          onLoadProgress={({nativeEvent}) => setProgress(nativeEvent.progress)}
          onLoadEnd={() => setLoaded(true)}
        />
      </View>
    </View>
  );
};

export default WebScreen;
