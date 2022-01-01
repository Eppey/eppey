import { API, Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as queries from '../../request/customQueries';

const MyPage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const info = await Auth.currentUserInfo();
    const userId = info.username;
    const response = await API.graphql({
      query: queries.getUser,
      variables: { id: userId },
    });
    console.log(response);
  };

  return (
    <View>
      <Text>My page right here!</Text>
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({});
