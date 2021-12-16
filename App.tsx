import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure({ ...config, Analytics: { disabled: true } });

import WelcomeScreen from './src/components/WelcomeScreen';

export function App() {
  return (
    <Provider store={store}>
      <WelcomeScreen />
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

export default withAuthenticator(App, { usernameAttributes: 'email' });
