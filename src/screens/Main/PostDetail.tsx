import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as queries from '../../graphql/queries';

import { API } from 'aws-amplify';
import { Post, GetPostQuery, GetPostQueryVariables } from '../../API';
import { fonts } from '../../styles/fonts';

import { calculateTime } from '../../tools/calculateTime';

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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        {Object.keys(post).length === 0 ? (
          <ActivityIndicator size="large" color="#272F40" />
        ) : (
          <View>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={fonts.body1Light}>{post.topic}</Text>
            <Text style={fonts.body1Light}>
              {post.userNickname} | {calculateTime(post.createdAt)}
            </Text>
            <View style={styles.contentContainer}>
              <Text style={styles.content}>
                {post.content.replace(/\r?\n|\r/g, ' ')}
              </Text>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  title: {
    ...fonts.header2,
    marginBottom: 10,
  },
  contentContainer: {
    borderStyle: 'solid',
    borderTopColor: '#272F4026',
    borderTopWidth: 1,
    marginTop: 15,
    paddingTop: 15,
  },
  content: {
    ...fonts.body1,
    fontWeight: 'normal',
  },
});

export default PostDetail;
