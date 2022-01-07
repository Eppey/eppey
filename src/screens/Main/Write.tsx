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
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import { useSelector } from 'react-redux';
import {
  selectUserID,
  selectUserNickname,
  selectSchool,
  selectMajor,
} from '../../redux/slices/userSlice';
import { Post } from '../../API';

import { API } from 'aws-amplify';
import { createPost, updatePost } from '../../graphql/mutations';

import { fonts } from '../../styles/fonts';
import { topics } from '../../data/topics';
import { Picker } from '@react-native-picker/picker';

const Write = ({ route }: any) => {
  const navigation: any = useNavigation();

  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('General');
  const [content, setContent] = useState('');

  const [postData, setPostData] = useState({} as Post);
  const [topicUpdated, setTopicUpdated] = useState(false);
  const userID = useSelector(selectUserID);
  const userNickname = useSelector(selectUserNickname);
  const school = useSelector(selectSchool);
  const major = useSelector(selectMajor);

  useEffect(() => {
    navigation.setOptions({
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
  }, [title, topic, content]);

  useEffect(() => {
    if (typeof route.params !== 'undefined') {
      setPostData(route.params.postData);
      setTitle(postData.title);
      setTopic(postData.topic);
      setContent(postData.content);
    }
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: '#272F40',
      },
      headerTintColor: '#FFFFFF',
      headerTitle: Object.keys(postData).length ? 'Edit Post' : 'New Post',
    });
  }, [postData]);

  useEffect(() => {
    if (!topicUpdated) {
      topics.push(school, major);
      setTopicUpdated(true);
    }
  }, []);

  const writePost = async () => {
    if (!title.trim().length || !content.trim().length) {
      Alert.alert('Error', "Title or content can't be empty!");
      return;
    }
    const params = {
      title: title.trim(),
      topic: topic,
      content: content.trim(),
      userID: userID,
      userNickname: userNickname,
      views: 0,
      bookmarks: 0,
      type: 'Post',
    };
    try {
      await API.graphql({
        query: createPost,
        variables: { input: params },
      });
      navigation.navigate('Main');
    } catch (err: any) {
      console.log(err);
      Alert.alert('Error', err.message);
    }
  };

  const editPost = async () => {
    if (!title.trim().length || !content.trim().length) {
      Alert.alert('Error', "Title or content can't be empty!");
      return;
    }
    let params: { [key: string]: string } = {
      id: postData.id,
      title: title.trim(),
      topic: topic,
      content: content.trim(),
    };
    await API.graphql({
      query: updatePost,
      variables: { input: params },
    });
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 450 : 0}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              maxLength={50}
            />
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
            <ScrollView>
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
              />
            </ScrollView>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
