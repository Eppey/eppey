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
import { fonts } from '../../styles/fonts';

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

  const timeElapsed = (createdAt: string) => {
    const created = new Date(createdAt);
    const now = new Date();
    let unit = 's';
    let elapsed = (now.getTime() - created.getTime()) / 1000;
    if (elapsed > 365 * 24 * 60 * 60) {
      elapsed /= 365 * 24 * 60 * 60;
      unit = 'y';
    } else if (elapsed > 30 * 24 * 60 * 60) {
      elapsed /= 30 * 24 * 60 * 60;
      unit = 'm';
    } else if (elapsed > 7 * 24 * 60 * 60) {
      elapsed /= 7 * 24 * 60 * 60;
      unit = 'w';
    } else if (elapsed > 24 * 60 * 60) {
      elapsed /= 24 * 60 * 60;
      unit = 'd';
    } else if (elapsed > 60 * 60) {
      elapsed /= 60 * 60;
      unit = 'h';
    } else if (elapsed > 60) {
      elapsed /= 60;
      unit = 'm';
    }
    return Math.round(elapsed) + unit;
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        {Object.keys(post).length === 0 ? (
          <ActivityIndicator size="large" color="#272F40" />
        ) : (
          <View>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={{ ...styles.subdetail, marginBottom: 2 }}>
              {post.topic}
            </Text>
            <Text style={styles.subdetail}>
              {post.userNickname} | {timeElapsed(post.createdAt)}
            </Text>
            <View style={styles.contentContainer}>
              <Text style={styles.content}>
                {post.content.replace(/\r?\n|\r/g, ' ')}
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    ...fonts.header2,
    marginBottom: 15,
  },
  contentContainer: {
    borderStyle: 'solid',
    borderTopColor: 'rgba(39, 47, 64, 0.15)',
    borderTopWidth: 1,
    marginTop: 15,
    paddingTop: 15,
  },
  content: {
    ...fonts.body1Light,
    color: '#272F40',
  },
  subdetail: {
    ...fonts.body1Light,
  },
});

export default PostDetail;
