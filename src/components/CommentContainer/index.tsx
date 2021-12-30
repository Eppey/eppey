import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Comment from '../Comment';

import { Comment as CommentTpye } from '../../API';

export type CommentProps = { commentData: CommentTpye[] };

const CommentContainer = ({ commentData }: CommentProps) => {
  return (
    <View>
      <Text>CommentContainer</Text>
    </View>
  );
};

export default CommentContainer;

const styles = StyleSheet.create({});
