import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import { API } from 'aws-amplify';
import * as customQueries from '../../request/customQueries';

import { PostObject } from '../Post';

import Post from '../Post';
import { useScrollToTop } from '@react-navigation/native';

const PostContainer = () => {
  const loadLimit = 20;
  const [nextToken, setNextToken] = useState('');
  const [postData, setPostData] = useState(Array());
  let endReached = false;

  const ref = React.useRef(null);
  useScrollToTop(ref);

  useEffect(() => {
    if (!postData.length) {
      getPosts();
    }
  }, [postData]);

  async function getPosts(token?: string) {
    if (token === null) {
      endReached = true;
      return;
    }
    let params = {
      type: 'Post',
      limit: loadLimit,
      sortDirection: 'DESC',
    };

    try {
      if (typeof token !== 'undefined') {
        params = { ...params, ...{ nextToken: nextToken } };
      }
      const posts: any = await API.graphql({
        query: customQueries.getLatestPost,
        variables: params,
      });
      setPostData([...postData, ...posts.data.getLatestPost.items]);
      setNextToken(posts.data.getLatestPost.nextToken);
    } catch (err: any) {
      setPostData(err.data.getLatestPost.items);
    }
  }

  const renderPosts = (postData: PostObject[]) => {
    if (!postData) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#272F40" />
        </View>
      );
    } else {
      return (
        <FlatList
          ref={ref}
          data={postData}
          renderItem={({ item }) => <Post post={item} key={item.id} />}
          keyExtractor={(item) => item.id}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (!endReached) {
              getPosts(nextToken);
            }
          }}
        />
      );
    }
  };
  return <View>{renderPosts(postData)}</View>;
};

export default PostContainer;

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    paddingTop: '70%',
  },
});
