import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { majors } from '../../data/majors';
import { components } from '../../styles/components';
import { fonts } from '../../styles/fonts';
import { Auth } from 'aws-amplify';

const EditProfile = ({ route }: any) => {
  const [user, setUser] = useState({} as any);

  useEffect(() => {
    (async () => {
      const { attributes } = await Auth.currentUserInfo();
      setUser(attributes);
      console.log(attributes);
    })();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.body1Light, { fontWeight: 'bold' }]}>
          Nickname
        </Text>
        <TextInput
          style={components.inputField}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => {}}
          value={user.nickname}
        />
        <Text style={[styles.body1Light, { fontWeight: 'bold' }]}>Major</Text>
        <Picker
          selectedValue={user['custom:major']}
          onValueChange={(itemValue, idx) => console.log('hi')}
        >
          {majors.map((item) => (
            <Picker.Item label={item} value={item} key={item} />
          ))}
        </Picker>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={[styles.body1Light, { textAlign: 'center' }]}>
          By signing up, you‚Äôre agreeing to{'\n'}EPPEY‚Äôs{' '}
          <Text style={{ fontWeight: 'bold' }}>Terms of Service</Text> and
          <Text style={{ fontWeight: 'bold' }}> Privacy Policy</Text>
        </Text>
        <Pressable style={styles.button} onPress={() => console.log('sign up')}>
          <Text style={fonts.fButton}>Save</Text>
        </Pressable>
      </View>
    </>
  );
};
export default EditProfile;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
  },
  signup: { ...fonts.header1, ...{ marginTop: 20, marginBottom: 25 } },
  button: { ...components.button, ...{ marginTop: 30 } },
  body1Light: { ...fonts.body1Light, ...{ marginBottom: 8 } },
});
