import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import * as queries from '../../graphql/queries';

import { API } from 'aws-amplify';
import { Post, GetPostQuery, GetPostQueryVariables } from '../../API';

import PostContent from '../../components/PostContent';
import CommentContainer from '../../components/CommentContainer';

import { fonts } from '../../styles/fonts';

// https://reactnative.dev/docs/refreshcontrol

const PostDetail = ({ route }: any) => {
  const [post, setPost] = useState({} as Post);
  const [commentHeight, setCommentHeight] = useState(0);
  const { postID } = route.params;

  useEffect(() => {
    (async () => {
      const response = await (API.graphql({
        query: queries.getPost,
        variables: { id: postID } as GetPostQueryVariables,
      }) as Promise<{ data: GetPostQuery }>);
      setPost(response.data.getPost as Post);
    })();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 95 : 0}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1 }}>
          {Object.keys(post).length === 0 ? (
            <ActivityIndicator size="large" color="#272F40" />
          ) : (
            <ScrollView style={styles.scrollView}>
              <PostContent post={post} />
              <CommentContainer commentData={post.comments?.items} />
            </ScrollView>
          )}
        </View>
        <TextInput
          style={[styles.commentField, { height: Math.max(50, commentHeight) }]}
          placeholder="Add a comment"
          placeholderTextColor="#272F40B2"
          multiline={true}
          onContentSizeChange={(event) => {
            setCommentHeight(event.nativeEvent.contentSize.height);
          }}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
  commentField: {
    ...fonts.body1Black,
    ...{
      fontWeight: 'normal',
      borderTopWidth: 1,
      borderTopColor: '#272F4026',
      paddingStart: '5%',
      paddingTop: 15,
    },
  },
});

export default PostDetail;
