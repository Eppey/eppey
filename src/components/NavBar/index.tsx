import React from 'react';
import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';

import NavMenu from '../NavMenu';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
const statusBar = StatusBar.currentHeight || 24;
const navbarH = screen.height - window.height + statusBar;

const NavBar = () => {
  return (
    <>
      <View style={styles.navBar}>
        <NavMenu menuType="Home" />
        <NavMenu menuType="Search" />
        <NavMenu menuType="Write" />
        <NavMenu menuType="Notification" />
        <NavMenu menuType="More" />
      </View>
      <View style={styles.navBarBlank}></View>
    </>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBar: {
    position: 'absolute',
    height: 60,
    width: window.width,
    top: window.height - navbarH - 60,
    backgroundColor: '#272F40',
    flexDirection: 'row',
  },
  navBarBlank: {
    position: 'absolute',
    height: navbarH,
    width: window.width,
    top: window.height - navbarH,
    backgroundColor: '#272F40',
  },
});
