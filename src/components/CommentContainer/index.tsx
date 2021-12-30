import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Comment from '../Comment';

import { Comment as CommentType } from '../../API';

export type CommentProps = { commentData: (CommentType | null)[] | undefined };

const CommentContainer = ({ commentData }: CommentProps) => {
  if (!commentData?.length) {
    return <View></View>;
  } else {
    return (
      <View>
        {commentData.map((comment) => (
          <Comment comment={comment} key={comment?.id} />
        ))}
      </View>
    );
  }
};

export default CommentContainer;

const styles = StyleSheet.create({});
