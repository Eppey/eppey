import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { calculateTime } from '../../tools/calculateTime';

import { fonts } from '../../styles/fonts';

import { PostProps } from '../Post';
import { useNavigation } from '@react-navigation/native';

const SearchResult = ({ post }: PostProps) => {
  const navigation: any = useNavigation();
  return (
    <Pressable
      style={{ marginHorizontal: '5%' }}
      onPress={() => navigation.navigate('PostDetail', { postID: post.id })}
    >
      <Text style={styles.header2}>{post.title}</Text>
      <Text style={styles.content} numberOfLines={3}>
        {post.content}
      </Text>
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <Text style={styles.userPostInfo}>{post.topic} | </Text>
        <Text style={styles.userPostInfo}>{calculateTime(post.createdAt)}</Text>
      </View>
      <Text style={styles.userPostInfo}>{post.userNickname}</Text>
      <View style={styles.divider} />
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.body1Custom}>{post.views} views | </Text>
        <Text style={styles.body1Custom}>0 comments | </Text>
        <Text style={styles.body1Custom}>{post.bookmarks} bookmarks</Text>
      </View>
      <View style={styles.divider2} />
    </Pressable>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  header2: { ...fonts.header2, ...{ fontWeight: 'normal', marginTop: 12 } },
  content: {
    ...fonts.body1,
    ...{ fontWeight: 'normal', marginTop: 5, color: '#283244B2' },
  },
  userPostInfo: {
    ...fonts.body1Black,
    lineHeight: 20,
  },
  body1Custom: {
    ...fonts.body1,
    ...{
      fontWeight: 'normal',
      marginTop: 10,
      color: '#283244B2',
    },
  },
  divider: {
    borderBottomColor: '#272F4026',
    borderBottomWidth: 1,
    marginTop: 10,
    marginHorizontal: '-100%',
  },
  divider2: {
    borderBottomColor: '#272F4026',
    borderBottomWidth: 5,
    marginTop: 10,
    marginHorizontal: '-100%',
  },
});
