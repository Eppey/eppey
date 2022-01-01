import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Auth } from 'aws-amplify';

import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';

import { fonts } from '../styles/fonts';
import { components } from '../styles/components';

const Welcome = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  async function checkAutoLogin(): Promise<void> {
    try {
      let email = (await AsyncStorage.getItem('@userEmail')) as string;
      let password = (await AsyncStorage.getItem('@userPassword')) as string;
      if (email !== null) {
        await Auth.signIn(email, password);
        const data = await Auth.currentUserInfo();
        dispatch(
          setUser({
            userID: data.username,
            userNickname: data.attributes['nickname'],
            school: data.attributes['custom:school'],
            major: data.attributes['custom:major'],
          })
        );
        navigation.navigate('Main');
      }
    } catch (err) {
      console.log(err);
    }
  }

  checkAutoLogin();

  return (
    <View style={{ height: '100%' }}>
      <View style={styles.topContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/huggingface.png')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Welcome to EPPEY</Text>
        <Text style={styles.description}>
          Join a community of over 100k+ international{'\n'}students from South
          Korea!
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={fonts.fButton}>GET STARTED</Text>
        </Pressable>
        <Text
          style={styles.description2}
          onPress={() => navigation.navigate('Signin')}
        >
          Already have an account?{' '}
          <Text style={{ fontWeight: 'bold' }}>Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  topContainer: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE1BD',
  },
  bottomContainer: {
    height: '50%',
    alignItems: 'center',
  },
  logo: {
    width: '45%',
    height: '45%',
    resizeMode: 'contain',
  },
  title: { ...fonts.header1, ...{ marginTop: '25%' } },
  description: {
    ...fonts.body1Light,
    ...{ marginTop: '4%', textAlign: 'center', color: '#272F4080' },
  },
  description2: { ...fonts.body1Light, ...{ marginTop: '2%' } },
  button: { ...components.button, ...{ marginTop: '12%' } },
});
