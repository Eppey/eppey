import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { API } from 'aws-amplify';
import * as customQueries from '../../graphql/customQueries';

import Post from '../Post';

const PostContainer = () => {
  const loadLimit = 30;
  const [nextToken, setNextToken] = useState('');
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    if (!postData) {
      getPosts(loadLimit);
    }
  }, [postData]);

  async function getPosts(count: number) {
    try {
      const posts: any = await API.graphql({
        query: customQueries.listPosts,
        variables: { limit: count },
      });
      setPostData(posts.data.listPosts.items);
      setNextToken(posts.data.listPosts.nextToken);
    } catch (err: any) {
      setPostData(err.data.listPosts.items);
    }
  }

  const render = (postData: any) => {
    let i = 0;
    if (!postData) {
      return <Text>Loading</Text>;
    } else {
      return (
        <>
          {postData.map((item: any) => (
            <Post post={item} key={i++} />
          ))}
        </>
      );
    }
  };

  return <View>{render(postData)}</View>;
};

export default PostContainer;

const styles = StyleSheet.create({});
