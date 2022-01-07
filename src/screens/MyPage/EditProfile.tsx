import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { components } from '../../styles/components';
import { fonts } from '../../styles/fonts';
import { API, Auth } from 'aws-amplify';

import * as mutations from '../../graphql/mutations';

const EditProfile = ({ navigation }: any) => {
  const [userAttr, setUserAttr] = useState({} as any);

  useEffect(() => {
    (async () => {
      const { attributes } = await Auth.currentUserInfo();
      setUserAttr(attributes);
    })();
  }, []);

  const updateUserAttr = async () => {
    const params = {
      id: userAttr.sub,
      nickname: userAttr.nickname,
    };
    await API.graphql({
      query: mutations.updateUser,
      variables: { input: params },
    });
    const user = await Auth.currentAuthenticatedUser();
    await Auth.updateUserAttributes(user, { nickname: userAttr.nickname });
    navigation.goBack();
  };

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
          onChangeText={(value) =>
            setUserAttr({ ...userAttr, nickname: value })
          }
          value={userAttr.nickname}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={[styles.body1Light, { textAlign: 'center' }]}>
          This updated nickname will be displayed to other users {'\n'}
          <Text style={{ fontWeight: 'bold' }}>Terms of Service</Text> and
          <Text style={{ fontWeight: 'bold' }}> Privacy Policy</Text>
        </Text>
        <Pressable style={styles.button} onPress={updateUserAttr}>
          <Text style={fonts.fButton}>Save</Text>
        </Pressable>
      </View>
    </>
  );
};
export default EditProfile;

const styles = StyleSheet.create({
  container: {
    margin: '5%',
  },
  button: { ...components.button, ...{ marginTop: 30 } },
  body1Light: { ...fonts.body1Light, ...{ marginBottom: 8 } },
});
