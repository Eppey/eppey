import { useScrollToTop } from '@react-navigation/native';
import { API, Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { GetUserCommentQuery } from '../../API';
import PostComment from '../../components/PostComment';

import * as queries from '../../graphql/queries';

const MyComments = () => {
  const [nextToken, setNextToken] = useState('');
  const [postData, setPostData] = useState(Array());
  const [loading, setLoading] = useState(false);

  const ref = React.useRef(null);
  useScrollToTop(ref);

  useEffect(() => {
    getMyComments();
  }, []);

  const getMyComments = async (loadMore?: boolean) => {
    setLoading(true);
    const { attributes } = await Auth.currentUserInfo();
    const { sub } = attributes;

    let params = {
      userID: sub,
      nextToken: loadMore ? nextToken : null,
    };

    const postRes = await (API.graphql({
      query: queries.getUserComment,
      variables: params,
    }) as Promise<{ data: GetUserCommentQuery }>);

    const userComments = postRes?.data?.getUserComment?.items as Array<any>;

    if (loadMore) {
      setPostData([...postData, ...userComments]);
    } else {
      setPostData(userComments);
    }
    setNextToken(postRes?.data?.getUserComment?.nextToken as string);
    setLoading(false);
  };
  return (
    <FlatList
      ref={ref}
      data={postData}
      renderItem={({ item }) => (
        <PostComment key={item.id} postComment={item} />
      )}
      keyExtractor={(item) => item.id}
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        if (nextToken !== null) {
          getMyComments(true);
        }
      }}
      onRefresh={() => getMyComments()}
      refreshing={loading}
    />
  );
};

export default MyComments;
