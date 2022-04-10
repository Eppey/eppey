import React, { useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import Post from '../Post';
import TopicContainer from '../TopicContainer';
import { useRoute, useScrollToTop } from '@react-navigation/native';

const PostContainer = ({ postData, getPosts, nextToken, loading }: any) => {
  const ref = React.useRef(null);
  const [topic, setTopic] = useState('');

  useScrollToTop(ref);

  return (
    <>
      {!postData ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#272F40" />
        </View>
      ) : (
        <>
          {useRoute().name === 'Home' ? (
            <TopicContainer curTopic={topic} setTopic={setTopic} />
          ) : (
            <></>
          )}
          <FlatList
            ref={ref}
            data={
              topic === ''
                ? postData
                : postData.filter((post: any) => post.topic === topic)
            }
            renderItem={({ item }) => <Post post={item} key={item.id} />}
            keyExtractor={(item) => item.id}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (nextToken !== null) {
                getPosts(true);
              }
            }}
            onRefresh={() => getPosts()}
            refreshing={loading}
          />
        </>
      )}
    </>
  );
};

export default PostContainer;

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    paddingTop: '70%',
  },
});
