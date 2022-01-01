import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';

import { API } from 'aws-amplify';
import * as customQueries from '../../request/customQueries';

import Post from '../Post';

const PostContainer = () => {
  const [nextToken, setNextToken] = useState('');
  const [postData, setPostData] = useState(Array());
  const ref = React.useRef(null);
  useScrollToTop(ref);

  useEffect(() => {
    if (!postData.length) {
      getPosts();
    }
  }, []);

  async function getPosts() {
    let params: { [key: string]: string } = {
      type: 'Post',
      limit: '20',
      sortDirection: 'DESC',
    };

    try {
      if (nextToken !== '') {
        params = { ...params, nextToken };
      }
      const posts: any = await API.graphql({
        query: customQueries.getLatestPost,
        variables: params,
      });
      setPostData([...postData, ...posts.data.getLatestPost.items]);
      setNextToken(posts.data.getLatestPost.nextToken);
    } catch (err: any) {
      setPostData([...postData, ...err.data.getLatestPost.items]);
    }
  }

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
              getPosts();
            }
          }}
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
