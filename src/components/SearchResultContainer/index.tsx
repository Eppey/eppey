import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type SearchProps = {
  keyword: string;
};

const SearchResultContainer = ({ keyword }: SearchProps) => {
  const params = {
    content: { contains: keyword },
    title: { contains: keyword },
    or: {
      content: { contains: keyword.toLowerCase() },
      title: { contains: keyword.toLowerCase() },
    },
  };

  useEffect(() => {
    console.log('Keyword changed: ' + keyword);
  });

  if (!keyword.length) {
    return <View></View>;
  } else {
    return (
      <View>
        <Text>{keyword}</Text>
      </View>
    );
  }
};

export default SearchResultContainer;

const styles = StyleSheet.create({});
