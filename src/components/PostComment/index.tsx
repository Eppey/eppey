import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { topicColors } from '../../data/topics';
import { components } from '../../styles/components';
import { fonts } from '../../styles/fonts';
import { calculateTime } from '../../tools/calculateTime';

const PostComment = ({ postComment }: any) => {
  const navigation: any = useNavigation();

  return (
    <Pressable
      style={{ marginHorizontal: '5%' }}
      onPress={() =>
        navigation.navigate('PostDetail', { postID: postComment?.postID })
      }
    >
      <View style={styles.divider} />
      <View
        style={[
          components.postTopicBox,
          { backgroundColor: topicColors[postComment?.post?.topic] },
        ]}
      >
        <Text style={fonts.body1Black}>{postComment?.post?.topic}</Text>
      </View>
      <Text style={styles.header2}>{postComment?.post?.title}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.body1}>{postComment?.userNickname} | </Text>
        <Text style={styles.body1}>{calculateTime(postComment.createdAt)}</Text>
      </View>
      <Text style={styles.body1Custom}>{postComment?.content}</Text>
      <Text></Text>
    </Pressable>
  );
};

export default PostComment;

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
    marginBottom: 10,
    marginHorizontal: '-100%',
  },
});
