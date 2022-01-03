import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  Alert,
  Button,
  SafeAreaView,
} from 'react-native';

import { useSelector } from 'react-redux';
import { selectUserID, selectUserNickname } from '../../redux/slices/userSlice';

import { API } from 'aws-amplify';
import * as customMutations from '../../request/customMutations';

import { fonts } from '../../styles/fonts';
import { topics } from '../../data/topics';
import { Picker } from '@react-native-picker/picker';

const Write = ({ route }: any) => {
  const navigation: any = useNavigation();

  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('General');
  const [content, setContent] = useState('');

  const [postID, setPostID] = useState('');
  const userID = useSelector(selectUserID);
  const userNickname = useSelector(selectUserNickname);

  if (typeof route.params !== 'undefined') {
    setPostID(route.params.postID);
  }

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: '#272F40',
      },
      headerTintColor: '#FFFFFF',
      headerTitle: 'New Post',
      headerRight: () => (
        <Button onPress={() => writePost()} title="Post" color="#FFFFFF" />
      ),
    });
  });

  async function writePost() {
    const postDetails = {
      title: title,
      topic: topic,
      content: content,
      userID: userID,
      userNickname: userNickname,
      views: 0,
      bookmarks: 0,
    };
    try {
      await API.graphql({
        query: customMutations.createPost,
        variables: { input: postDetails },
      });
      navigation.navigate('Main');
    } catch (err: any) {
      console.log(err);
      Alert.alert('Error', err.message);
    }
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <View style={{ marginHorizontal: '5%' }}>
        <TextInput
          style={styles.titleField}
          placeholder="Write a title"
          placeholderTextColor="#272F40B2"
          autoCorrect={false}
          autoFocus={true}
          onChangeText={(value) => {
            setTitle(value);
          }}
        ></TextInput>
        <Picker
          selectedValue={topic}
          onValueChange={(itemValue) => setTopic(itemValue)}
          itemStyle={styles.pickerText}
          style={{ borderBottomWidth: 1, borderBottomColor: '#272F4026' }}
        >
          {topics.map((item) => (
            <Picker.Item label={item} value={item} key={item} />
          ))}
        </Picker>
        <TextInput
          style={styles.bodyField}
          placeholder={
            'Start a conversation!\n\nMake sure you are not writing ' +
            'down any personal information or secrets :)'
          }
          placeholderTextColor="#272F40B2"
          multiline={true}
          autoCorrect={false}
          onChangeText={(value) => {
            setContent(value);
          }}
        ></TextInput>
      </View>
    </SafeAreaView>
  );
};

export default Write;

const styles = StyleSheet.create({
  titleField: {
    ...fonts.body1Black,
    ...{
      fontWeight: 'normal',
      height: 50,
      borderBottomWidth: 1,
      borderBottomColor: '#272F4026',
    },
  },
  bodyField: {
    ...fonts.body1Black,
    ...{
      fontWeight: 'normal',
      paddingTop: 15,
    },
  },
  pickerText: {
    ...fonts.body1Black,
    ...{ textAlign: 'left', height: 120 },
  },
});
