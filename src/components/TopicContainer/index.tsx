import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Topic from '../Topic';

import { originalTopics, schoolTopics } from '../../data/topics';

const TopicContainer = ({ curTopic, setTopic }: any) => {
  let i = 0;

  return (
    <>
      <View style={styles.divider} />
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {useRoute().name === 'Home'
            ? originalTopics.map((topic) => (
                <Topic
                  topic={topic}
                  curTopic={curTopic}
                  setTopic={setTopic}
                  key={i++}
                />
              ))
            : schoolTopics.map((topic) => (
                <Topic
                  topic={topic}
                  curTopic={curTopic}
                  setTopic={setTopic}
                  key={i++}
                />
              ))}
        </ScrollView>
      </View>
      <View style={styles.divider} />
    </>
  );
};

export default TopicContainer;

const styles = StyleSheet.create({
  container: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#f9f9f9',
  },
  divider: {
    borderBottomColor: '#272F4026',
    borderBottomWidth: 1,
    marginHorizontal: '-100%',
  },
});
