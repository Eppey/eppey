import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type PostProps = {
  post: PostObject;
};

export type PostObject = {
  bookmarks: number;
  comments?: any;
  content: string;
  createdAt: string;
  id: string;
  title: string;
  topic: string;
  updatedAt: string;
  userNickname: string;
  views: number;
};

const Post = ({ post }: PostProps) => {
  const today = new Date();
  const dateCreated = new Date(Date.parse(post.createdAt));
  var diffMins = Math.round(
    (((today.valueOf() - dateCreated.valueOf()) % 86400000) % 3600000) / 60000
  );

  return (
    <View>
      <Text>{post.topic}</Text>
      <Text>{post.title}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text>{post.userNickname} | </Text>
        <Text>{diffMins}m</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>{post.views} views | </Text>
        <Text>0 comments | </Text>
        <Text>{post.bookmarks} bookmarks</Text>
      </View>
      <Text></Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
