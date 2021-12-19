import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Pressable } from 'react-native';

const SignupComplete = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <Text style={styles.signup}>Sign Up{'\n'}Complete!</Text>
      <Text style={styles.ftype2}>
        Please check your
        <Text style={{ fontWeight: 'bold' }}> email</Text> for
        <Text style={{ fontWeight: 'bold' }}> confirmation</Text>
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Signin' as never)}
      >
        <Text style={[styles.buttonText, styles.ftype1]}>SIGN IN</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignupComplete;

const styles = StyleSheet.create({
  signup: {
    marginTop: '70%',
    marginBottom: 20,
    fontSize: 36,
    fontWeight: '700',
    letterSpacing: -1.24,
    color: '#283244',
    textAlign: 'center',
  },
  ftype1: {
    fontFamily: 'System',
    textAlign: 'center',
    lineHeight: 20,
    letterSpacing: -0.24,
  },
  ftype2: {
    marginBottom: 8,
    fontFamily: 'System',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: '#272F40B2',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  button: {
    marginTop: 40,
    height: 50,
    width: '65%',
    borderRadius: 30,
    backgroundColor: '#272F40',
    justifyContent: 'center',
  },
});
