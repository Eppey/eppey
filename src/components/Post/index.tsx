import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { calculateTime } from '../../tools/calculateTime';

import { Post as PostObject } from '../../API';

import { fonts } from '../../styles/fonts';
import { components } from '../../styles/components';
import { topicColors } from '../../data/topics';
import { useNavigation } from '@react-navigation/native';

export type PostProps = {
  post: PostObject;
};

const Post = ({ post }: PostProps) => {
  const navigation: any = useNavigation();

  return (
    <Pressable
      style={{ marginHorizontal: '5%' }}
      onPress={() => navigation.navigate('PostDetail', { postID: post.id })}
    >
      {post.topic in topicColors ? (
        <View
          style={[
            components.postTopicBox,
            { backgroundColor: topicColors[post.topic] },
          ]}
        >
          <Text style={fonts.body1Black}>{post.topic}</Text>
        </View>
      ) : (
        <View style={{ marginTop: 10 }}></View>
      )}
      <Text style={styles.header2}>{post.title}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.body1}>{post.userNickname} | </Text>
        <Text style={styles.body1}>{calculateTime(post.createdAt)}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.body1Custom}>{post.views} views | </Text>
        <Text style={styles.body1Custom}>
          {post.comments?.items?.length} comments |{' '}
        </Text>
        <Text style={styles.body1Custom}>{post.bookmarks} bookmarks</Text>
      </View>
      <View style={styles.divider} />
    </Pressable>
  );
};

export default Post;

const styles = StyleSheet.create({
  header2: { ...fonts.header2, ...{ fontWeight: 'normal' } },
  body1: {
    ...fonts.body1,
    ...{ fontWeight: 'normal', marginTop: 5, color: '#283244B2' },
  },
  body1Custom: {
    ...fonts.body1,
    ...{ fontWeight: 'normal', marginTop: 10, color: '#283244B2' },
  },
  divider: {
    borderBottomColor: '#272F4026',
    borderBottomWidth: 1,
    marginTop: 10,
    marginHorizontal: '-100%',
  },
});
