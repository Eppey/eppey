import React, { useEffect, useState } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

import PostContainer from '../../components/PostContainer';

import { API } from 'aws-amplify';
import * as customQueries from '../../request/customQueries';

const Home = () => {
  const [nextToken, setNextToken] = useState('');
  const [postData, setPostData] = useState(Array());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async (loadMore?: boolean) => {
    setLoading(true);
    let params: { [key: string]: string } = {
      type: 'Post',
      limit: '20',
      sortDirection: 'DESC',
    };
    if (nextToken !== '') {
      params = { ...params, nextToken };
    }
    const posts: any = await API.graphql({
      query: customQueries.getLatestPost,
      variables: params,
    });

    if (loadMore) {
      setPostData([...postData, ...posts.data.getLatestPost.items]);
    } else {
      setPostData(posts.data.getLatestPost.items);
    }
    setNextToken(posts.data.getLatestPost.nextToken);
    setLoading(false);
  };

  return (
    <View>
      <StatusBar barStyle={'dark-content'} />
      <PostContainer
        postData={postData}
        getPosts={getPosts}
        nextToken={nextToken}
        loading={loading}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
