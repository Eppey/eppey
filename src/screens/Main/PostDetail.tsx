import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import * as queries from '../../graphql/queries';

import { API } from 'aws-amplify';
import { Post, GetPostQuery, GetPostQueryVariables } from '../../API';

import PostDetails from '../../components/PostDetails';
import CommentContainer from '../../components/CommentContainer';

// https://reactnative.dev/docs/refreshcontrol

const PostDetail = ({ route }: any) => {
  const [post, setPost] = useState({} as Post);
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
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <View>
        {Object.keys(post).length === 0 ? (
          <ActivityIndicator size="large" color="#272F40" />
        ) : (
          <ScrollView style={styles.scrollView}>
            <PostDetails post={post} />
            {/* <CommentContainer commentData={post.comments?.items}/> */}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
});

export default PostDetail;
