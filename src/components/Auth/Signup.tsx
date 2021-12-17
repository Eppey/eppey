import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  TextInput,
} from 'react-native';

const SignupScreen = () => {
  const navigation = useNavigation();

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
        />
        <Text style={[styles.ftype2, { fontWeight: 'bold' }]}>Password</Text>
        <TextInput style={styles.inputField} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={[styles.ftype2, { textAlign: 'center' }]}>
          By signing up, you’re agreeing to{'\n'}EPPEY’s{' '}
          <Text style={{ fontWeight: 'bold' }}>Terms of Service</Text> and
          <Text style={{ fontWeight: 'bold' }}> Privacy Policy</Text>
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('SignupComplete' as never)}
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
