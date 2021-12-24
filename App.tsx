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

import Welcome from './src/screens/Welcome';
import Signup from './src/screens/Auth/Signup';
import SignupComplete from './src/screens/Auth/SignupComplete';
import Signin from './src/screens/Auth/Signin';
import PwReset from './src/screens/Auth/PwReset';
import PwResetConfirm from './src/screens/Auth/PwResetConfirm';
import PwResetDone from './src/screens/Auth/PwResetDone';

import Home from './src/screens/Main/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="SignupComplete" component={SignupComplete} />
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen name="PwReset" component={PwReset} />
            <Stack.Screen name="PwResetConfirm" component={PwResetConfirm} />
            <Stack.Screen name="PwResetDone" component={PwResetDone} />
            <Stack.Screen
              name="Home"
              component={Home}
              // options={{ gestureEnabled: false }}
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
