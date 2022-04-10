import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

import { components } from '../../styles/components';
import { topicColors } from '../../data/topics';

const Topic = ({ topic, curTopic, setTopic }: any) => {
  const changeTopic = () => {
    if (curTopic === topic) {
      setTopic('');
    } else {
      setTopic(topic);
    }
  };

  return (
    <Pressable
      style={[
        components.postTopicBoxBig,
        { backgroundColor: topicColors[topic] },
      ]}
      onPress={() => changeTopic()}
    >
      <Text>{topic}</Text>
    </Pressable>
  );
};

export default Topic;

const styles = StyleSheet.create({});
