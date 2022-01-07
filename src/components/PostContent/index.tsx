import React from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { PostProps } from '../Post';

import { calculateTime } from '../../tools/calculateTime';

import { fonts } from '../../styles/fonts';

const PostContent = ({ post }: PostProps) => {
  return (
    <View style={{ paddingHorizontal: '5%' }}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={fonts.body1Light}>{post.topic}</Text>
      <Text style={fonts.body1Light}>
        {post.userNickname} | {calculateTime(post.createdAt)}
      </Text>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{post.content}</Text>
      </View>
      <View style={styles.statContainer}>
        <Image
          style={styles.icon}
          source={require('../../../assets/icons/comment.png')}
        />
        <Text style={[styles.stat, { marginEnd: 15 }]}>
          {post.comments?.items.length} comments
        </Text>
        <Pressable
          style={{ flexDirection: 'row' }}
          onPress={() => Alert.alert('share pressed')}
        >
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/share.png')}
          />
          <Text style={styles.stat}>Share</Text>
        </Pressable>
        <Text style={[styles.stat, { position: 'absolute', right: 0 }]}>
          {post.views} views
        </Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export default PostContent;

const styles = StyleSheet.create({
  title: {
    ...fonts.header2,
    marginTop: '5%',
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
  statContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  stat: {
    ...fonts.body1,
    fontWeight: 'normal',
    color: '#272F40B2',
  },
  divider: {
    borderBottomColor: '#272F401A',
    borderBottomWidth: 5,
    marginTop: 12,
    marginHorizontal: '-100%',
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginEnd: 5,
  },
});
