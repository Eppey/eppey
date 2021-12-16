import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

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
        <Text style={[styles.description, styles.ftype1]}>
          Join a community of over 100k+ international{'\n'}students from South
          Korea!
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Signup' as never)}
        >
          <Text style={[styles.buttonText, styles.ftype1]}>GET STARTED</Text>
        </Pressable>
        <Text style={[styles.description2, styles.ftype1]}>
          Already have an account?{' '}
          <Text style={{ fontWeight: 'bold' }}>Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;

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
  title: {
    marginTop: '25%',
    fontFamily: 'System',
    fontWeight: 'bold',
    color: '#272F40',
    fontSize: 36,
    lineHeight: 40,
    letterSpacing: -1.24,
  },
  description: {
    marginTop: '4%',
    color: '#272F4080',
    fontSize: 14,
  },
  description2: {
    marginTop: '2%',
    color: '#272F40B2',
    fontSize: 14,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  button: {
    marginTop: '12%',
    height: 50,
    width: '65%',
    borderRadius: 30,
    backgroundColor: '#272F40',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ftype1: {
    fontFamily: 'System',
    textAlign: 'center',
    lineHeight: 20,
    letterSpacing: -0.24,
  },
});
