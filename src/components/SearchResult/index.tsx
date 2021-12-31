import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

import { calculateTime } from '../../tools/calculateTime';

import { fonts } from '../../styles/fonts';

import { PostProps } from '../Post';

const SearchResult = ({ post }: PostProps) => {
  return (
    <Pressable
      style={{ marginHorizontal: '5%', paddingVertical: 15 }}
      onPress={() => Alert.alert('PostID', post.id)}
    >
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
    </Pressable>
  );
};

export default SearchResult;

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
