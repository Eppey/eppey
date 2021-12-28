import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

import PostContainer from '../../components/PostContainer';

const Home = () => {
  return (
    <View>
      <StatusBar barStyle={'dark-content'} />
      <PostContainer />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
