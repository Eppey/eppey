import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';

import { Auth } from 'aws-amplify';

type User = {
  email: string;
  password: string;
};

const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signUp(user: User): Promise<void> {
    if (user.password.length >= 8) {
      try {
        await Auth.signUp({
          username: user.email,
          password: user.password,
          attributes: {
            email: user.email,
          },
        });
        navigation.navigate('SignupComplete' as never);
      } catch (err: any) {
        if (err.code === 'UserNotConfirmedException') {
          Alert.alert('Account not verified yet');
        } else if (err.code === 'PasswordResetRequiredException') {
          Alert.alert('Existing user found. Please reset your password');
        } else if (err.code === 'NotAuthorizedException') {
          Alert.alert('Forgot Password?');
        } else if (err.code === 'UserNotFoundException') {
          Alert.alert('User does not exist!');
        } else {
          Alert.alert(err.code);
        }
      }
    } else {
      Alert.alert('Password length should be between 8 ~ 20');
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable
          style={{ flexDirection: 'row' }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.back}
            source={require('../../../assets/icons/back.png')}
          />
          <Text style={styles.backText}>Back</Text>
        </Pressable>
        <Text style={styles.signup}>Sign Up</Text>
        <Text style={[styles.ftype2, { fontWeight: 'bold' }]}>Email</Text>
        <TextInput
          style={styles.inputField}
          placeholder="(ending with .edu)"
          autoFocus={true}
          onChangeText={(value) => {
            setEmail(value);
          }}
        />
        <Text style={[styles.ftype2, { fontWeight: 'bold' }]}>Password</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={(value) => {
            setPassword(value);
          }}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={[styles.ftype2, { textAlign: 'center' }]}>
          By signing up, you’re agreeing to{'\n'}EPPEY’s{' '}
          <Text style={{ fontWeight: 'bold' }}>Terms of Service</Text> and
          <Text style={{ fontWeight: 'bold' }}> Privacy Policy</Text>
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => signUp({ email: email, password: password })}
        >
          <Text style={[styles.buttonText, styles.ftype1]}>SIGN UP</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
  },
  back: {
    width: 18,
    height: 22,
    resizeMode: 'contain',
  },
  signup: {
    marginTop: 20,
    marginBottom: 25,
    fontSize: 36,
    fontWeight: '700',
    letterSpacing: -1.24,
    color: '#283244',
  },
  backText: {
    marginStart: 2,
    fontFamily: 'System',
    fontSize: 18,
    textAlign: 'left',
    color: '#283244',
  },
  inputField: {
    paddingLeft: 10,
    marginBottom: 10,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#FFE1BD66',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  button: {
    marginTop: 30,
    height: 50,
    width: '65%',
    borderRadius: 30,
    backgroundColor: '#272F40',
    justifyContent: 'center',
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
});
