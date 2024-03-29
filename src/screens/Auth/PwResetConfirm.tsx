import React, { useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import { selectResetEmail } from '../../redux/slices/userSlice';

import { Auth } from 'aws-amplify';

import { fonts } from '../../styles/fonts';
import { components } from '../../styles/components';

const PwResetConfirm = () => {
  const navigation: any = useNavigation();
  const email = useSelector(selectResetEmail);
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

  const userChangePW = async () => {
    try {
      await Auth.forgotPasswordSubmit(email, password, code);
      navigation.navigate('PwResetDone');
    } catch (err: any) {
      Alert.alert('Error', err.message);
    }
  };

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
        <Text style={styles.signup}>Check Email</Text>
        <Text style={[styles.body1Light, { fontWeight: 'bold' }]}>
          Confirmation Code
        </Text>
        <TextInput
          style={components.inputField}
          autoFocus={true}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => {
            setCode(value);
          }}
        />
        <Text style={[styles.body1Light, { fontWeight: 'bold' }]}>
          New Password
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
        <Pressable style={styles.button} onPress={() => userChangePW()}>
          <Text style={fonts.fButton}>RESET PASSWORD</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default PwResetConfirm;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
  },
  signup: { ...fonts.header1, ...{ marginTop: 20, marginBottom: 25 } },
  button: { ...components.button, ...{ marginTop: 30 } },
  body1Light: { ...fonts.body1Light, ...{ marginBottom: 8 } },
});
