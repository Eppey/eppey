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

type User = {
  email: string;
  password: string;
  major: string;
  nickname: string;
  school: string;
};

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [major, setMajor] = useState('-');
  const [nickname, setNickname] = useState('');

  async function userSignUp(user: User): Promise<void> {
    if (user.school == 'N/A') {
      Alert.alert('Error', 'Invalid email');
      return;
    }
    if (user.major == '-') {
      Alert.alert('Error', 'Pick a valid major');
      return;
    }

    if (user.password.length >= 8) {
      try {
        await Auth.signUp({
          username: user.email,
          password: user.password,
          attributes: {
            email: user.email,
            'custom:major': user.major,
            'custom:nickname': user.nickname,
            'custom:school': user.school,
          },
        });
        navigation.navigate('SignupComplete' as never);
      } catch (err: any) {
        Alert.alert('Error', err.message);
      }
    } else {
      Alert.alert('Error', 'Password length should be between 8 ~ 20');
    }
  }

  function getSchool(email: String): string {
    const domain = email.substring(email.indexOf('@') + 1);
    if (domain in universities) {
      return universities[domain].name;
    }
    return 'N/A';
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
        <Pressable
          style={styles.button}
          onPress={() =>
            userSignUp({
              email: email,
              password: password,
              major: major,
              nickname: nickname,
              school: getSchool(email),
            })
          }
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
