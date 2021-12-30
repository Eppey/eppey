import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as queries from '../../graphql/queries';

import { API } from 'aws-amplify';
import { Post, GetPostQuery, GetPostQueryVariables } from '../../API';

const PostDetail = ({ route, navigation }: any) => {
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
    <View>
      <StatusBar barStyle="light-content" />
      <View>
        {Object.keys(post).length === 0 ? (
          <ActivityIndicator size="large" color="#272F40" />
        ) : (
          <View>
            <Text>{post.title}</Text>
            <Text>{post.topic}</Text>
            <Text>{post.content}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

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

export default PostDetail;
