import { API, Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { GetUserPostQuery } from '../../API';
import PostContainer from '../../components/PostContainer';

import * as queries from '../../graphql/queries';

const MyPosts = () => {
  const [nextToken, setNextToken] = useState('');
  const [postData, setPostData] = useState(Array());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMyPosts();
  }, []);

  const getMyPosts = async (loadMore?: boolean) => {
    setLoading(true);
    const { attributes } = await Auth.currentUserInfo();
    const { sub } = attributes;

    let params = {
      userID: sub,
      nextToken: loadMore ? nextToken : null,
    };

    const postRes = await (API.graphql({
      query: queries.getUserPost,
      variables: params,
    }) as Promise<{ data: GetUserPostQuery }>);

    const userPosts = postRes?.data?.getUserPost?.items as Array<any>;

    if (loadMore) {
      setPostData([...postData, ...userPosts]);
    } else {
      setPostData(userPosts);
    }
    setNextToken(postRes?.data?.getUserPost?.nextToken as string);
    setLoading(false);
  };
  return (
    <>
      <PostContainer
        postData={postData}
        getPosts={getMyPosts}
        nextToken={nextToken}
        loading={loading}
      />
    </>
  );
};

export default MyPosts;
