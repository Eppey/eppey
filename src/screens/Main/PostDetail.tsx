import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as queries from '../../graphql/queries';

import { API } from 'aws-amplify';
import { GetPostQuery } from '../../API';

const PostDetail = ({ route, navigation }: any) => {
  const [post, setPost] = useState({});
  const { postID } = route.params;

  useEffect(() => {
    async function getPostDetail() {
      const post = await API.graphql({
        query: queries.getPost,
        variables: { id: postID },
      });
      console.log(post);
      setPost(post);
    }
    getPostDetail();
  }, []);
  return (
    <SafeAreaView>
      <View>
        {Object.keys(post).length === 0 && (
          <>
            <Text>{post.title}</Text>
            <Text>{post.topic}</Text>
            <Text>{post.content}</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default PostDetail;

const styles = StyleSheet.create({});
