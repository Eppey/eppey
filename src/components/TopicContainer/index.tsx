import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Topic from '../Topic';

import { originalTopics } from '../../data/topics';

const TopicContainer = ({ curTopic, setTopic }: any) => {
  let i = 0;

  return (
    <>
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {originalTopics.map((topic) => (
            <Topic
              topic={topic}
              curTopic={curTopic}
              setTopic={setTopic}
              key={i++}
            />
          ))}
        </ScrollView>
      </View>
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
