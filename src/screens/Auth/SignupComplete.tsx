import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Pressable } from 'react-native';

import { fonts } from '../../styles/fonts';
import { components } from '../../styles/components';

const SignupComplete = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <Text style={styles.signup}>Sign Up{'\n'}Complete!</Text>
      <Text style={styles.body1Light}>
        Please check your
        <Text style={{ fontWeight: 'bold' }}> email</Text> for
        <Text style={{ fontWeight: 'bold' }}> confirmation</Text>
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Signin')}
      >
        <Text style={fonts.fButton}>SIGN IN</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignupComplete;

const styles = StyleSheet.create({
  signup: {
    ...fonts.header1,
    ...{ marginTop: '70%', marginBottom: 20, textAlign: 'center' },
  },
  body1Light: { ...fonts.body1Light, ...{ marginBottom: 8 } },
  button: { ...components.button, ...{ marginTop: 40 } },
});
