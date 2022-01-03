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
import { Picker } from '@react-native-picker/picker';

import { Auth } from 'aws-amplify';

import { fonts } from '../../styles/fonts';
import { components } from '../../styles/components';
import { universities } from '../../data/universities';
import { majors } from '../../data/majors';

const Signup = () => {
  const navigation: any = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [major, setMajor] = useState('-');
  const [nickname, setNickname] = useState('');

  const userSignUp = async () => {
    const school = await getSchool();

    if (school == 'N/A') {
      Alert.alert('Error', 'Invalid email');
      return;
    }
    if (major == '-') {
      Alert.alert('Error', 'Pick a valid major');
      return;
    }
    if (password.length >= 8) {
      try {
        await Auth.signUp({
          username: email,
          password: password,
          attributes: {
            email: email,
            nickname: nickname,
            'custom:major': major,
            'custom:school': school,
          },
        });
        navigation.navigate('SignupComplete');
      } catch (err: any) {
        Alert.alert('Error', err.message);
      }
    } else {
      Alert.alert('Error', 'Password length should be between 8 ~ 20');
    }
  };

  const getSchool = async () => {
    const domain = email.substring(email.indexOf('@') + 1);
    if (domain in universities) {
      return universities[domain].name;
    }
    return 'N/A';
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
        <Text style={styles.signup}>Sign Up</Text>
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
        <Text style={[styles.body1Light, { fontWeight: 'bold' }]}>
          Nickname
        </Text>
        <TextInput
          style={components.inputField}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => {
            setNickname(value);
          }}
        />
        <Text style={[styles.body1Light, { fontWeight: 'bold' }]}>Major</Text>
        <Picker
          selectedValue={major}
          onValueChange={(itemValue, idx) => setMajor(itemValue)}
        >
          {majors.map((item) => (
            <Picker.Item label={item} value={item} key={item} />
          ))}
        </Picker>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={[styles.body1Light, { textAlign: 'center' }]}>
          By signing up, you’re agreeing to{'\n'}EPPEY’s{' '}
          <Text style={{ fontWeight: 'bold' }}>Terms of Service</Text> and
          <Text style={{ fontWeight: 'bold' }}> Privacy Policy</Text>
        </Text>
        <Pressable style={styles.button} onPress={() => userSignUp()}>
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
