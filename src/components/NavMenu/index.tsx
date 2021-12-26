import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';

const data: { [key: string]: { image: string } } = {
  Home: { image: require('../../../assets/icons/home.png') },
  Search: { image: require('../../../assets/icons/search.png') },
  Write: { image: require('../../../assets/icons/write.png') },
  Notification: { image: require('../../../assets/icons/notification.png') },
  More: { image: require('../../../assets/icons/more.png') },
};

const NavMenu = (type: { menuType: string }) => {
  return (
    <Pressable style={styles.menuItem}>
      <Image style={styles.icon} source={data[type.menuType].image as any} />
    </Pressable>
  );
};

export default NavMenu;

const styles = StyleSheet.create({
  menuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
