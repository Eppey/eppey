import { API, Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GetUserCommentQuery, GetUserPostQuery, Post } from '../../API';

import * as queries from '../../graphql/queries';

import { fonts } from '../../styles/fonts';

type UserInfo = {
  nickname: string;
  email: string;
  sub: string;
  postCnt: number;
  commentCnt: number;
};

const MyPage = () => {
  const [user, setUser] = useState({} as UserInfo);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const { attributes } = await Auth.currentUserInfo();
    const { nickname, email, sub } = attributes;

    const postRes = await (API.graphql({
      query: queries.getUserPost,
      variables: { userID: sub },
    }) as Promise<{ data: GetUserPostQuery }>);
    const userPosts = postRes?.data?.getUserPost?.items as Array<any>;

    const commentRes = await (API.graphql({
      query: queries.getUserComment,
      variables: { userID: sub },
    }) as Promise<{ data: GetUserCommentQuery }>);
    const userComments = commentRes?.data?.getUserComment?.items as Array<any>;

    setUser({
      nickname,
      email,
      sub,
      postCnt: userPosts.length,
      commentCnt: userComments.length,
    });
  };

  return (
    <View>
      <View style={{ backgroundColor: '#E0DCF3', padding: 20 }}>
        <View style={styles.userSummaryContainer}>
          <View>
            <Text style={fonts.header2}>{user.nickname}</Text>
            <Text>{user.email}</Text>
          </View>
          <Pressable>
            <Text
              style={{
                ...fonts.body1,
                textDecorationLine: 'underline',
              }}
            >
              Edit
            </Text>
          </Pressable>
        </View>
        <View style={styles.userStat}>
          <View>
            <Text style={fonts.body1}>Posts</Text>
            <Text>{user.postCnt}</Text>
          </View>
          <View style={styles.userStatItem}>
            <Text style={fonts.body1}>Comments</Text>
            <Text>{user.commentCnt}</Text>
          </View>
          <View style={styles.userStatItem}>
            <Text style={fonts.body1}>Points</Text>
            <Text>1,101</Text>
          </View>
        </View>
      </View>
      <View style={styles.mainDivider} />
      <View>
        <Pressable>
          <Text style={styles.pageMenuItem}>My Posts</Text>
        </Pressable>
        <View style={styles.subDivider} />
        <Pressable>
          <Text style={styles.pageMenuItem}>My Comments</Text>
        </Pressable>
        <View style={styles.subDivider} />
        <Pressable>
          <Text style={styles.pageMenuItem}>Bookmarks</Text>
        </Pressable>
      </View>
      <View style={styles.mainDivider} />
      <View>
        <Pressable>
          <Text style={styles.pageMenuItem}>Settings</Text>
        </Pressable>
        <View style={styles.subDivider} />
        <Pressable>
          <Text style={styles.pageMenuItem}>Updates</Text>
        </Pressable>
        <View style={styles.subDivider} />
        <Pressable>
          <Text style={styles.pageMenuItem}>Send Feedback</Text>
        </Pressable>
      </View>
      <Text style={styles.copyright}>© 2021 EPPEY. All rights reserved.</Text>
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  userSummaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  userStat: {
    flexDirection: 'row',
  },
  userStatItem: {
    marginLeft: 40,
  },
  pageMenuItem: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    ...fonts.body1Regular,
  },
  mainDivider: {
    borderBottomColor: '#272F4026',
    borderBottomWidth: 5,
  },
  subDivider: {
    borderBottomColor: '#272F4026',
    borderBottomWidth: 1,
  },
  copyright: {
    color: 'rgba(39, 47, 64, 0.7)',
    backgroundColor: '#272F4026',
    height: '100%',
    textAlign: 'center',
    paddingTop: 20,
  },
});
