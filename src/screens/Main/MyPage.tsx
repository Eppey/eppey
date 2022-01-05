import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import EditProfile from '../MyPage/EditProfile';

import MyBookmarks from '../MyPage/MyBookmarks';
import MyComments from '../MyPage/MyComments';
import MyPosts from '../MyPage/MyPosts';
import Profile from '../MyPage/Profile';
import Settings from '../MyPage/Settings';
import Updates from '../MyPage/Updates';

const MyPage = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="MyPosts" component={MyPosts} />
      <Stack.Screen name="MyComments" component={MyComments} />
      <Stack.Screen name="MyBookmarks" component={MyBookmarks} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Updates" component={Updates} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default MyPage;
