import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavigatorParamsList} from './types';
import {Home, ActiveAmulet, AmuletsScreen, WebScreen} from '../../screens';

const Stack = createNativeStackNavigator<MainNavigatorParamsList>();

export const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ActiveAmulet"
        component={ActiveAmulet}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AmuletsScreen"
        component={AmuletsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WebScreen"
        component={WebScreen}
        options={{
          headerTitle: 'Policy',
        }}
      />
    </Stack.Navigator>
  );
};
