import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Pressable } from 'react-native';

import { fonts } from '../../styles/fonts';
import { components } from '../../styles/components';

const PwResetDone = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <Text style={styles.signup}>Reset{'\n'}Complete!</Text>
      <Text style={styles.body1Light}>
        Sign in with your email and
        <Text style={{ fontWeight: 'bold' }}> new password</Text>
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Signin' as never)}
      >
        <Text style={fonts.fButton}>SIGN IN</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PwResetDone;

const styles = StyleSheet.create({
  signup: {
    ...fonts.header1,
    ...{ marginTop: '70%', marginBottom: 20, textAlign: 'center' },
  },
  body1Light: { ...fonts.body1Light, ...{ marginBottom: 8 } },
  button: { ...components.button, ...{ marginTop: 40 } },
});
