import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Auth } from 'aws-amplify';
import React from 'react';
import { Alert, Image, Pressable, StyleSheet } from 'react-native';
import EditProfile from '../MyPage/EditProfile';

import MyBookmarks from '../MyPage/MyBookmarks';
import MyComments from '../MyPage/MyComments';
import MyPosts from '../MyPage/MyPosts';
import Profile from '../MyPage/Profile';
import Settings from '../MyPage/Settings';
import Updates from '../MyPage/Updates';

const MyPage = ({ navigation }: any) => {
  const Stack = createNativeStackNavigator();

  const logOut = async () => {
    try {
      await Auth.signOut();
      navigation.navigate('Signin');
    } catch (err: any) {
      Alert.alert('Error', err);
    }
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#D1CAF2',
        },
        headerTintColor: '#272F40',
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: 'My Page',
          headerRight: () => (
            <Pressable onPress={() => logOut()}>
              <Image
                style={styles.icon}
                source={require('../../../assets/icons/logout.png')}
              />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="MyPosts"
        component={MyPosts}
        options={{ headerTitle: 'My Posts' }}
      />
      <Stack.Screen
        name="MyComments"
        component={MyComments}
        options={{ headerTitle: 'My Comments' }}
      />
      <Stack.Screen
        name="MyBookmarks"
        component={MyBookmarks}
        options={{ headerTitle: 'My Bookmarks' }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerTitle: 'Settings' }}
      />
      <Stack.Screen
        name="Updates"
        component={Updates}
        options={{ headerTitle: 'Updates' }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerTitle: 'Edit Profile' }}
      />
    </Stack.Navigator>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
