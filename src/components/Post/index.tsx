import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

import { fonts } from '../../styles/fonts';
import { components } from '../../styles/components';

export type PostProps = {
  post: PostObject;
};

export type PostObject = {
  id: string;
  userNickname: string;
  title: string;
  topic: string;
  views: number;
  bookmarks: number;
  comments?: any;
  createdAt: string;
};

const colors: { [topic: string]: string } = {
  'Georgia Tech': '#FFE1BD',
  Engineering: '#98C4EC',
  Networking: '#FE9E8F',
  Market: '#D1CAF2',
};

const Post = ({ post }: PostProps) => {
  const today = new Date();
  const dateCreated = new Date(Date.parse(post.createdAt));
  var diffMins = Math.round(
    (((today.valueOf() - dateCreated.valueOf()) % 86400000) % 3600000) / 60000
  );

  const topicColor = colors[post.topic];

  return (
    <Pressable
      style={{ marginHorizontal: '5%' }}
      onPress={() => Alert.alert('PostID', post.id)}
    >
      <View
        style={{
          borderBottomColor: '#272F4026',
          borderBottomWidth: 1,
          marginBottom: 10,
          marginHorizontal: '-100%',
        }}
      />
      <View style={[components.postTopicBox, { backgroundColor: topicColor }]}>
        <Text style={fonts.body1Black}>{post.topic}</Text>
      </View>
      <Text style={styles.header2}>{post.title}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.body1}>{post.userNickname} | </Text>
        <Text style={styles.body1}>{diffMins}m</Text>
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
