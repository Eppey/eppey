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

import { useDispatch } from 'react-redux';
import { setResetEmail } from '../../redux/slices/userSlice';

import { Auth } from 'aws-amplify';

import { fonts } from '../../styles/fonts';
import { components } from '../../styles/components';

const PwReset = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  const [email, setEmail] = useState('');

  async function userFindPw(email: string): Promise<void> {
    if (email.length != 0 && email.includes('.edu')) {
      try {
        await Auth.forgotPassword(email);
        dispatch(setResetEmail(email));
        navigation.navigate('PwResetConfirm');
      } catch (err: any) {
        if (err.code === 'UserNotFoundException') {
          Alert.alert('Error', 'No such user');
        } else {
          Alert.alert(err.message);
        }
      }
    } else {
      if (email.length == 0) {
        Alert.alert('Error', 'Email length should be longer than 0');
      } else {
        Alert.alert('Error', 'Email should end with .edu');
      }
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
        <Text style={styles.signup}>Reset Password</Text>
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
      </View>
      <View style={{ alignItems: 'center' }}>
        <Pressable
          style={styles.button}
          onPress={() => {
            userFindPw(email);
          }}
        >
          <Text style={fonts.fButton}>SEND</Text>
        </Pressable>
        <Text
          style={styles.body1Light1}
          onPress={() => navigation.navigate('Signin')}
        >
          Back to<Text style={{ fontWeight: 'bold' }}> Sign In</Text>{' '}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PwReset;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
  },
  signup: { ...fonts.header1, ...{ marginTop: 20, marginBottom: 25 } },
  button: { ...components.button, ...{ marginTop: 30 } },
  body1Light: { ...fonts.body1Light, ...{ marginBottom: 8 } },
  body1Light1: { ...fonts.body1Light, ...{ marginTop: 10 } },
});
