import { API, Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { GetUserBookmarkQuery } from '../../API';
import PostContainer from '../../components/PostContainer';

import { getUserBookmark } from '../../graphql/queries';

const MyBookmarks = () => {
  const [nextToken, setNextToken] = useState('');
  const [postData, setPostData] = useState(Array());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMyBookmarks();
  }, []);

  const getMyBookmarks = async (loadMore?: boolean) => {
    setLoading(true);
    const { attributes } = await Auth.currentUserInfo();
    const { sub } = attributes;

    let params = {
      userID: sub,
      nextToken: loadMore ? nextToken : null,
    };

    const bookmarkRes = await (API.graphql({
      query: getUserBookmark,
      variables: params,
    }) as Promise<{ data: GetUserBookmarkQuery }>);

    const userBookmarks = bookmarkRes?.data?.getUserBookmark
      ?.items as Array<any>;

    if (loadMore) {
      setPostData([...postData, ...userBookmarks]);
    } else {
      setPostData(userBookmarks);
    }
    setNextToken(bookmarkRes?.data?.getUserBookmark?.nextToken as string);
    setLoading(false);
  };
  return (
    <View>
      <PostContainer
        postData={postData}
        getPosts={getMyBookmarks}
        nextToken={nextToken}
        loading={loading}
      />
    </View>
  );
};

export default MyBookmarks;
