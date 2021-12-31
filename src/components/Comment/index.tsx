import React from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Comment as CommentType } from '../../API';

import { calculateTime } from '../../tools/calculateTime';

import { fonts } from '../../styles/fonts';

export type commentItemProp = {
  comment: CommentType | null;
};

const Comment = ({ comment }: commentItemProp) => {
  return (
    <>
      {comment !== null ? (
        <View style={{ paddingHorizontal: '5%' }}>
          <Text style={styles.nickname}>{comment.userNickname}</Text>
          <Text style={styles.content}>{comment.content}</Text>
          <View style={[styles.statContainer, { marginTop: 6 }]}>
            <Text style={styles.stats}>{calculateTime(comment.createdAt)}</Text>
            <Pressable
              style={styles.statContainer}
              onPress={() => Alert.alert('Like clicked', comment.id)}
            >
              <Image
                style={styles.icon}
                source={require('../../../assets/icons/likes.png')}
              />
              <Text style={styles.stats}>{comment.likes} Likes</Text>
            </Pressable>
            <Pressable
              style={styles.statContainer}
              onPress={() => Alert.alert('Reply clicked', comment.id)}
            >
              <Image
                style={styles.icon}
                source={require('../../../assets/icons/comment.png')}
              />
              <Text style={styles.stats}>Reply</Text>
            </Pressable>
            <Pressable
              style={[styles.statContainer, { position: 'absolute', right: 0 }]}
              onPress={() => Alert.alert('Edit options clicked', comment.id)}
            >
              <Image
                style={styles.editIcon}
                source={require('../../../assets/icons/more_grey.png')}
              />
            </Pressable>
          </View>
          <View style={styles.divider} />
        </View>
      ) : (
        <View></View>
      )}
    </>
  );
};

export default Comment;

const styles = StyleSheet.create({
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginStart: 20,
    marginEnd: 6,
  },
  editIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  nickname: {
    ...fonts.body1,
    marginTop: 12,
  },
  content: {
    ...fonts.body1,
    fontWeight: 'normal',
  },
  statContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stats: {
    ...fonts.body1Light,
  },
  divider: {
    borderBottomColor: '#272F4026',
    borderBottomWidth: 1,
    marginTop: 12,
    marginHorizontal: '-100%',
  },
});
