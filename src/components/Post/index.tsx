import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { calculateTime } from '../../tools/calculateTime';

import { fonts } from '../../styles/fonts';
import { components } from '../../styles/components';
import { topicColors } from '../../data/topics';
import { useNavigation } from '@react-navigation/native';

export type PostProps = {
  post: PostObject;
};

export type PostObject = {
  id: string;
  userNickname: string;
  title: string;
  content: string;
  topic: string;
  views: number;
  bookmarks: number;
  comments?: any;
  createdAt: string;
};

const Post = ({ post }: PostProps) => {
  return (
    <Pressable
      style={{ marginHorizontal: '5%' }}
      onPress={() => navigation.navigate('PostDetail', { postID: post.id })}
    >
      <View
        style={{
          borderBottomColor: '#272F4026',
          borderBottomWidth: 1,
          marginBottom: 10,
          marginHorizontal: '-100%',
        }}
      />
      <View
        style={[
          components.postTopicBox,
          { backgroundColor: topicColors[post.topic] },
        ]}
      >
        <Text style={fonts.body1Black}>{post.topic}</Text>
      </View>
      <Text style={styles.header2}>{post.title}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.body1}>{post.userNickname} | </Text>
        <Text style={styles.body1}>{calculateTime(post.createdAt)}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.body1Custom}>{post.views} views | </Text>
        <Text style={styles.body1Custom}>0 comments | </Text>
        <Text style={styles.body1Custom}>{post.bookmarks} bookmarks</Text>
      </View>
      <Text></Text>
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
});
