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
import { Post } from '../../API';

import { API } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';

import { fonts } from '../../styles/fonts';
import { topics } from '../../data/topics';
import { Picker } from '@react-native-picker/picker';

const Write = ({ route }: any) => {
  const navigation: any = useNavigation();

  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('General');
  const [content, setContent] = useState('');

  const [postData, setPostData] = useState({} as Post);
  const userID = useSelector(selectUserID);
  const userNickname = useSelector(selectUserNickname);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: '#272F40',
      },
      headerTintColor: '#FFFFFF',
      headerTitle: Object.keys(postData).length ? 'Edit Post' : 'New Post',
      headerRight: () => (
        <Button
          onPress={() =>
            Object.keys(postData).length ? editPost() : writePost()
          }
          title="Post"
          color="#FFFFFF"
        />
      ),
    });
  }, [navigation, content]);

  useEffect(() => {
    if (typeof route.params !== 'undefined') {
      setPostData(route.params.postData);
      setTitle(postData.title);
      setTopic(postData.topic);
      setContent(postData.content);
    }
  }, [postData]);

  const writePost = async () => {
    if (!title.length || !content.length) {
      Alert.alert('Error', "Title or content can't be empty!");
      return;
    }
    const params = {
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
        query: mutations.createPost,
        variables: { input: params },
      });
      navigation.navigate('Main');
    } catch (err: any) {
      console.log(err);
      Alert.alert('Error', err.message);
    }
  };

  const editPost = async () => {
    if (!title.length || !content.length) {
      Alert.alert('Error', "Title or content can't be empty!");
      return;
    }
    let params: { [key: string]: string } = {
      id: postData.id,
      title: title,
      topic: topic,
      content: content,
    };
    await API.graphql({
      query: mutations.updatePost,
      variables: { input: params },
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <View style={{ marginHorizontal: '5%' }}>
        <TextInput
          value={title}
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
          value={content}
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
