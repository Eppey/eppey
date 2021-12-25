import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import PostContainer from '../../components/PostContainer';

const Home = () => {
  return (
    <SafeAreaView>
      <PostContainer />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
