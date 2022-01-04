import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { User, GetUserQuery, GetUserQueryVariables } from '../../API';

import { useSelector } from 'react-redux';
import { selectUserID } from '../../redux/slices/userSlice';

import * as queries from '../../graphql/queries';

import { fonts } from '../../styles/fonts';

const Profile = ({ navigation }: any) => {
  const [user, setUser] = useState({} as User);
  const userID = useSelector(selectUserID);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const response = await (API.graphql({
      query: queries.getUser,
      variables: { id: userID } as GetUserQueryVariables,
    }) as Promise<{ data: GetUserQuery }>);
    setUser(response.data.getUser!);
  };

  return (
    <View>
      <View style={{ backgroundColor: '#E0DCF3', padding: 20 }}>
        <View style={styles.userSummaryContainer}>
          <View>
            <Text style={[fonts.header2, { marginBottom: 5 }]}>
              {user.nickname}
            </Text>
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
            <Text>{user.posts?.items.length}</Text>
          </View>
          <View style={styles.userStatItem}>
            <Text style={fonts.body1}>Comments</Text>
            <Text>{user.comments?.items.length}</Text>
          </View>
          <View style={styles.userStatItem}>
            <Text style={fonts.body1}>Points</Text>
            <Text>{user.points}</Text>
          </View>
        </View>
      </View>
      <View style={styles.mainDivider} />
      <View>
        <Pressable onPress={() => navigation.navigate('MyPosts')}>
          <Text style={styles.pageMenuItem}>My Posts</Text>
        </Pressable>
        <View style={styles.subDivider} />
        <Pressable onPress={() => navigation.navigate('MyComments')}>
          <Text style={styles.pageMenuItem}>My Comments</Text>
        </Pressable>
        <View style={styles.subDivider} />
        <Pressable onPress={() => navigation.navigate('MyBookmarks')}>
          <Text style={styles.pageMenuItem}>Bookmarks</Text>
        </Pressable>
      </View>
      <View style={styles.mainDivider} />
      <View>
        <Pressable onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.pageMenuItem}>Settings</Text>
        </Pressable>
        <View style={styles.subDivider} />
        <Pressable onPress={() => navigation.navigate('Updates')}>
          <Text style={styles.pageMenuItem}>Updates</Text>
        </Pressable>
        <View style={styles.subDivider} />
        <Pressable onPress={() => navigation.navigate('Feedback')}>
          <Text style={styles.pageMenuItem}>Send Feedback</Text>
        </Pressable>
      </View>
      <Text style={styles.copyright}>© 2021 EPPEY. All rights reserved.</Text>
    </View>
  );
};

export default Profile;

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
