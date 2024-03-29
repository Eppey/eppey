import { useScrollToTop } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { API } from 'aws-amplify';
import * as customQueries from '../../request/customQueries';

import SearchResult from '../SearchResult';

export type SearchProps = {
  keyword: string;
};

const SearchResultContainer = ({ keyword }: SearchProps) => {
  const [nextToken, setNextToken] = useState(null);
  const [searchData, setSearchData] = useState(Array());
  const [loading, setLoading] = useState(false);
  const ref = React.useRef(null);
  useScrollToTop(ref);

  useEffect(() => {
    if (keyword) updateSearchResult();
  }, [keyword]);

  const updateSearchResult = async (loadMore?: boolean) => {
    setLoading(true);
    let params = {
      filter: { title: { contains: keyword } },
      type: 'Post',
      sortDirection: 'DESC',
      limit: '100',
      nextToken: loadMore ? nextToken : null,
    };

    const posts: any = await API.graphql({
      query: customQueries.getLatestPost,
      variables: params,
    });

    if (loadMore) {
      setSearchData([...searchData, ...posts.data.getLatestPost.items]);
    } else {
      setSearchData(posts.data.getLatestPost.items);
    }
    setNextToken(posts.data.getLatestPost.nextToken);
    setLoading(false);
  };

  return (
    <SafeAreaView style={{ height: '100%' }}>
      <FlatList
        ref={ref}
        data={searchData}
        renderItem={({ item }) => <SearchResult post={item} key={item.id} />}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={() => nextToken && updateSearchResult(true)}
        onRefresh={() => updateSearchResult()}
        refreshing={loading}
      />
    </SafeAreaView>
  );
};

export default SearchResultContainer;

const styles = StyleSheet.create({});
