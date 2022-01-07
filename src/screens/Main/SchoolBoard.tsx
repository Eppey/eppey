import React, { useEffect, useState } from 'react';

import PostContainer from '../../components/PostContainer';

import { API } from 'aws-amplify';
import { getLatestPost } from '../../request/customQueries';

import { useSelector } from 'react-redux';
import { selectSchool } from '../../redux/slices/userSlice';

const SchoolBoard = () => {
  const [nextToken, setNextToken] = useState('');
  const [postData, setPostData] = useState(Array());
  const [loading, setLoading] = useState(false);

  const school = useSelector(selectSchool);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async (loadMore?: boolean) => {
    setLoading(true);
    let params = {
      filter: { topic: { eq: school } },
      type: 'Post',
      limit: '20',
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
      <PostContainer
        postData={postData}
        getPosts={getPosts}
        nextToken={nextToken}
        loading={loading}
      />
    </>
  );
};

export default SchoolBoard;
