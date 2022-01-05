import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import Post from '../Post';
import { useScrollToTop } from '@react-navigation/native';

const PostContainer = ({ postData, getPosts, nextToken, loading }: any) => {
  const ref = React.useRef(null);
  useScrollToTop(ref);

  return (
    <>
      {!postData ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#272F40" />
        </View>
      ) : (
        <FlatList
          ref={ref}
          data={postData}
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
