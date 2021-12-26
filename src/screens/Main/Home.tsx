import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import PostContainer from '../../components/PostContainer';
import NavBar from '../../components/NavBar';

const Home = () => {
  return (
    <SafeAreaView>
      <PostContainer />
      <NavBar />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
