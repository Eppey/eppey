import React, { useState } from 'react';
import {
  Image,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import SearchResultContainer from '../../components/SearchResultContainer';

import { fonts } from '../../styles/fonts';

const Search = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ height: '100%' }}>
        <Image
          style={styles.searchIcon}
          source={require('../../../assets/icons/search_black.png')}
        />
        <TextInput
          style={styles.titleField}
          placeholder="Search by using keywords!"
          placeholderTextColor="#272F40B2"
          autoCorrect={false}
          autoFocus={true}
          onSubmitEditing={(e) => setKeyword(e.nativeEvent.text)}
          clearButtonMode="always"
        ></TextInput>
        <SearchResultContainer keyword={keyword} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Search;

const styles = StyleSheet.create({
  titleField: {
    ...fonts.body1Black,
    ...{
      marginHorizontal: '5%',
      fontWeight: 'normal',
      height: 50,
      borderBottomWidth: 1,
      paddingStart: 30,
      borderBottomColor: '#272F4026',
    },
  },
  searchIcon: {
    position: 'absolute',
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginHorizontal: '3.5%',
    marginTop: 17,
    marginEnd: 10,
  },
});
