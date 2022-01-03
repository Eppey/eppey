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
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Auth } from 'aws-amplify';

import { fonts } from '../../styles/fonts';
import { components } from '../../styles/components';

const Signin = () => {
  const navigation: any = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userSignIn = async () => {
    try {
      await Auth.signIn(email, password);
      saveUserInfo();
      navigation.navigate('Main');
    } catch (err: any) {
      Alert.alert('Error', err.message);
    }
  };

  const saveUserInfo = async () => {
    try {
      await AsyncStorage.multiSet([
        ['@userEmail', email],
        ['@userPassword', password],
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable
          style={{ flexDirection: 'row' }}
          onPress={() => navigation.navigate('Welcome')}
        >
          <Image
            style={components.backButton}
            source={require('../../../assets/icons/back.png')}
          />
          <Text style={fonts.fBack}>Back</Text>
        </Pressable>
        <Text style={styles.signup}>Sign In</Text>
        <Text style={[styles.body1Light, { fontWeight: 'bold' }]}>Email</Text>
        <TextInput
          style={components.inputField}
          placeholder="(ending with .edu)"
          autoFocus={true}
          autoCapitalize="none"
          autoCorrect={false}
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
        <Text
          style={[styles.body1Light, { textAlign: 'right' }]}
          onPress={() => navigation.navigate('PwReset')}
        >
          Forgot password? |<Text style={{ fontWeight: 'bold' }}> Reset</Text>
        </Text>
        <Pressable style={styles.button} onPress={() => userSignIn()}>
          <Text style={fonts.fButton}>SIGN IN</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
  },
  signup: { ...fonts.header1, ...{ marginTop: 20, marginBottom: 25 } },
  button: { ...components.button, ...{ marginTop: 30 } },
  body1Light: { ...fonts.body1Light, ...{ marginBottom: 8 } },
});
