import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import * as queries from '../../graphql/queries';

import { API } from 'aws-amplify';
import { Post, GetPostQuery, GetPostQueryVariables } from '../../API';
import * as mutations from '../../graphql/mutations';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setPostOwnerID } from '../../redux/slices/sessionSlice';
import { selectUserID, selectUserNickname } from '../../redux/slices/userSlice';

import PostContent from '../../components/PostContent';
import CommentContainer from '../../components/CommentContainer';

import { fonts } from '../../styles/fonts';

const PostDetail = ({ route }: any) => {
  const [post, setPost] = useState({} as Post);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [commentContent, setCommentContent] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const { postID } = route.params;

  const dispatch = useDispatch();
  const userID = useSelector(selectUserID);
  const userNickname = useSelector(selectUserNickname);

  useEffect(() => {
    getPostDetail();
  }, []);

  const getPostDetail = async () => {
    setRefreshing(true);
    const response = await (API.graphql({
      query: queries.getPost,
      variables: { id: postID } as GetPostQueryVariables,
    }) as Promise<{ data: GetPostQuery }>);
    setPost(response.data.getPost as Post);
    dispatch(setPostOwnerID(post.userID));
    setRefreshing(false);
  };

  const writeComment = async () => {
    let params: { [key: string]: string | undefined } = {
      postID: postID,
      userID: userID,
      userNickname: userNickname,
      content: commentContent,
      likes: '0',
    };
    await API.graphql({
      query: mutations.createComment,
      variables: { input: params },
    });
    getPostDetail();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1 }}>
          {Object.keys(post).length === 0 ? (
            <ActivityIndicator size="large" color="#272F40" />
          ) : (
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={() => getPostDetail()}
                />
              }
            >
              <PostContent post={post} />
              <CommentContainer commentData={post.comments?.items} />
            </ScrollView>
          )}
        </View>
        <View style={styles.divider} />
        {showCommentForm ? (
          <View>
            <Pressable
              style={styles.closeButton}
              onPress={() => {
                setCommentContent('');
                setShowCommentForm(false);
                Keyboard.dismiss();
              }}
            >
              <Image
                style={styles.icon}
                source={require('../../../assets/icons/close.png')}
              />
            </Pressable>
            <TextInput
              style={styles.commentField}
              placeholder="Add a comment"
              placeholderTextColor="#272F40B2"
              multiline={true}
              value={commentContent}
              onChangeText={(value) => {
                setCommentContent(value);
              }}
              autoFocus={true}
            />
            <View style={styles.divider} />
            <Pressable
              onPress={() => {
                writeComment();
                setCommentContent('');
              }}
              style={styles.postButton}
            >
              <Text style={styles.postText}>Post</Text>
            </Pressable>
          </View>
        ) : (
          <Pressable
            style={{ height: 40, paddingStart: '5%', justifyContent: 'center' }}
            onPress={() => setShowCommentForm(true)}
          >
            <Text style={fonts.body1Light}>Add a comment</Text>
          </Pressable>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  commentField: {
    ...fonts.body1Black,
    ...{
      fontWeight: 'normal',
      paddingStart: '5%',
      paddingVertical: 15,
      marginVertical: 10,
      height: 80,
    },
  },
  divider: {
    borderBottomColor: '#272F4026',
    borderBottomWidth: 1,
    marginHorizontal: '-100%',
  },
  postButton: {
    height: 40,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  postText: {
    ...fonts.body1,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  closeButton: {
    height: 40,
    justifyContent: 'center',
    paddingStart: 5,
  },
});

export default PostDetail;
