import React, { useEffect, useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import PostContainer from '../../components/PostContainer';

import { API } from 'aws-amplify';
import { getLatestPost } from '../../request/customQueries';

const Home = () => {
  const [nextToken, setNextToken] = useState('');
  const [postData, setPostData] = useState(Array());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async (loadMore?: boolean) => {
    setLoading(true);
    let params = {
      type: 'Post',
      limit: '30',
      sortDirection: 'DESC',
      nextToken: loadMore ? nextToken : null,
    };

    const posts: any = await API.graphql({
      query: getLatestPost,
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
    <>
      <StatusBar barStyle={'dark-content'} />
      <PostContainer
        postData={postData}
        getPosts={getPosts}
        nextToken={nextToken}
        loading={loading}
      />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
