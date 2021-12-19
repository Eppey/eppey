import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure({ ...config, Analytics: { disabled: true } });

import Welcome from './src/components/Welcome';
import Signup from './src/components/Auth/Signup';
import SignupComplete from './src/components/Auth/SignupComplete';
import Signin from './src/components/Auth/Signin';
import PwReset from './src/components/Auth/PwReset';
import PwResetConfirm from './src/components/Auth/PwResetConfirm';
import PwResetDone from './src/components/Auth/PwResetDone';

import Home from './src/components/Main/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignupComplete"
              component={SignupComplete}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PwReset"
              component={PwReset}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PwResetConfirm"
              component={PwResetConfirm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PwResetDone"
              component={PwResetDone}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
