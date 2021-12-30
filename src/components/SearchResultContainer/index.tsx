import { useScrollToTop } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { API } from 'aws-amplify';
import * as customQueries from '../../request/customQueries';

import SearchResult from '../SearchResult';

export type SearchProps = {
  keyword: string;
};

const SearchResultContainer = ({ keyword }: SearchProps) => {
  const [nextToken, setNextToken] = useState('');
  const [searchData, setSearchData] = useState(Array());
  const ref = React.useRef(null);
  useScrollToTop(ref);

  useEffect(() => {
    console.log('▶ keyword: ' + keyword);
    getSearchData();
  }, []);

  async function getSearchData() {
    let params = {
      filter: { title: { contains: keyword } },
      type: 'Post',
      sortDirection: 'DESC',
      limit: '100',
    };

    try {
      if (nextToken !== '') {
        params = { ...params, ...{ nextToken: nextToken } };
      }
      const posts: any = await API.graphql({
        query: customQueries.getLatestPost,
        variables: params,
      });
      setSearchData([...searchData, ...posts.data.getLatestPost.items]);
      setNextToken(posts.data.getLatestPost.nextToken);
    } catch (err: any) {
      setSearchData([...searchData, ...err.data.getLatestPost.items]);
    }
  }

  if (!keyword.length) {
    return (
      <View>
        <Text>Start searching</Text>
      </View>
    );
  } else {
    console.log('ran');
    return (
      <FlatList
        ref={ref}
        data={searchData}
        renderItem={({ item }) => <SearchResult post={item} key={item.id} />}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (nextToken !== null) {
            getSearchData();
          }
        }}
      />
    );
  }
};

export default SearchResultContainer;

const styles = StyleSheet.create({});
