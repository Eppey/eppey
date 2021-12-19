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

import { fonts } from '../../styles/fonts';
import { components } from '../../styles/components';

type User = {
  email: string;
  password: string;
};

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function userSignUp(user: User): Promise<void> {
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
            style={components.backButton}
            source={require('../../../assets/icons/back.png')}
          />
          <Text style={fonts.fBack}>Back</Text>
        </Pressable>
        <Text style={styles.signup}>Sign Up</Text>
        <Text style={[styles.body1Light, { fontWeight: 'bold' }]}>Email</Text>
        <TextInput
          style={components.inputField}
          placeholder="(ending with .edu)"
          autoFocus={true}
          autoCapitalize="none"
          onChangeText={(value) => {
            setEmail(value);
          }}
        />
        <Text style={[styles.body1Light, { fontWeight: 'bold' }]}>
          Password
        </Text>
        <TextInput
          style={components.inputField}
          secureTextEntry={true}
          onChangeText={(value) => {
            setPassword(value);
          }}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={[styles.body1Light, { textAlign: 'center' }]}>
          By signing up, you’re agreeing to{'\n'}EPPEY’s{' '}
          <Text style={{ fontWeight: 'bold' }}>Terms of Service</Text> and
          <Text style={{ fontWeight: 'bold' }}> Privacy Policy</Text>
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => userSignUp({ email: email, password: password })}
        >
          <Text style={fonts.fButton}>SIGN UP</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
  },
  signup: { ...fonts.header1, ...{ marginTop: 20, marginBottom: 25 } },
  button: { ...components.button, ...{ marginTop: 30 } },
  body1Light: { ...fonts.body1Light, ...{ marginBottom: 8 } },
});
